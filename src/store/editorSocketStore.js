import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useEditorSocketStore = create(devtools((set) => ({
    editorSocket: null,
    setEditorSocket: (incomingSocket) => {
        console.log("called");
        
        set({
            editorSocket: incomingSocket
        })
    }
})))