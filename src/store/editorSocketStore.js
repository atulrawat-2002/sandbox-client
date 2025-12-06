import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { useActiveFileTabStore } from './activeFileTabStore';
import { useTreeStructureStore } from './treeStructureStore';

export const useEditorSocketStore = create(devtools((set) => ({
    editorSocket: null,
    setEditorSocket: (incomingSocket) => {      

        const activeFileTabSetter = useActiveFileTabStore.getState().setActiveFileTab;
        const treeStructureSetter = useTreeStructureStore.getState().setTreeStructure;
        
            incomingSocket?.on("readFileSuccess", (data) => {
                console.log(data)
                const fileExtension = data.path.split(".").pop();
                activeFileTabSetter(data.value, data.path, fileExtension)
            })

            incomingSocket?.on("writeFileSuccess", (data) => {
                console.log("Write file success")
                // incomingSocket.emit("readFile", {
                //     pathToFileOrFolder: data.path
                // })
            })

            incomingSocket?.on("deleteFileSuccess", (data) => {
                treeStructureSetter()
            })

        set({
            editorSocket: incomingSocket
        })
    }
})))