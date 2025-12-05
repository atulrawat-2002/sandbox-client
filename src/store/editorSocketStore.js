import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { useActiveFileTabStore } from './activeFileTabStore';

export const useEditorSocketStore = create(devtools((set) => ({
    editorSocket: null,
    setEditorSocket: (incomingSocket) => {      

        const activeFileTabSetter = useActiveFileTabStore.getState().setActiveFileTab;
        
            incomingSocket?.on("readFileSuccess", (data) => {
                console.log(data)
                activeFileTabSetter(data.value, data.path)
            })

            incomingSocket?.on("writeFileSuccess", (data) => {
                console.log("Write file success")
                // incomingSocket.emit("readFile", {
                //     pathToFileOrFolder: data.path
                // })
            })

        set({
            editorSocket: incomingSocket
        })
    }
})))