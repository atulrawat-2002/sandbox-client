

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