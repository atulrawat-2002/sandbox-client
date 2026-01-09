

const extensionToFileMapper = {
    'js': 'javascript',
    'jsx': 'javascript',
    'txs': 'typescript',
    'html': 'html',
    'css': 'css',
    'json': 'json',
    'md': 'markdown',
    'yaml': 'yaml',
    'svg': 'svg'
}

export const extensionToFileType = (extension) => {
    if(!extension) return undefined

    return extensionToFileMapper[extension]
}

export const tabs = new Map()

export const handleFileTabs = (data) => {
    if(tabs.get(data.path)) {
        tabs[data.path] = data.value
    } else {
        tabs.set(data.path, data.value)
    }
    // console.log(tabs, data);
    
}