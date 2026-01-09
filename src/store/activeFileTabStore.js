import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

class tab {
    constructor(data, key) {
        this.data = data;
        this.key = key
        this.prev = null
        this.next = null
    }
}

class tabsData {
    constructor () {
        this.map = new Map();
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        this.head.next = this.tail;
        this.prev = null;

        this.tail.prev = this.head;
        this.tail.next = null
    }
}

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
        },

    }
}))