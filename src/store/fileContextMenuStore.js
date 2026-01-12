import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useFileContextMenuStore = create(
  devtools((set) => ({
    x: null,
    y: null,
    isOpen: false,
    file: null, 
    renaming: false,
    folder: null,
    setX: (incomingX) => {
      set({
        x: incomingX,
      });
    },
    setY: (incomingY) => {
      set({
        y: incomingY,
      });
    },
    setIsOpen: (incomingIsOpen) => {
      set({
        isOpen: incomingIsOpen,
      });
    },
    setFile: (incomingFile) => {
      set({
        file: incomingFile,
      });
    },
    setFolder: (incomingFolder) => {
      set({
        folder: incomingFolder,
      })
    },
    setRenaming: () => {
      set((state) => ({
        renaming: !state.renaming,
      }));
    },
  }))
);
