import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useActiveFileTabStore = create(devtools((set) => {
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
}))