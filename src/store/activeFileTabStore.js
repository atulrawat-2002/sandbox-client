import { create } from 'zustand';


export const useActiveFileTabStore = create((set) => {
    return {
        activeFileTab: null,
        setActiveFileTab: (value, path, extension) => {
            set({
                activeFileTab: {
                    value: value,
                    path: path,
                    extension: extension
                }
            })
        }
    }
})