import { useEditorSocketStore } from "../../../store/editorSocketStore"
import { useFileContextMenuStore } from "../../../store/fileContextMenuStore"
import { handleRenameFile } from "../TreeNode/TreeNode"
import './FileContextMenu.css'


const FileContextMenu = ({x, y, path}) => {

    const { setIsOpen } = useFileContextMenuStore()
    const { editorSocket } = useEditorSocketStore()

    const handleDeleteFile = () => {

        editorSocket.emit("deleteFile", {
            pathToFileOrFolder: path
        })
    }

  return (
    <div
        className="fileContectOptionsWrapper"
        style={{
            top: y,
            left: x,
            zIndex: 1,
        }}
        onMouseLeave={() => setIsOpen(false)}
    >

        <button className="fileContectButton"
            onClick={handleDeleteFile}
        >
            Delete File
        </button>
        <button  
        className="fileContectButton" 
        onClick={() => handleRenameFile(path, editorSocket)}
        >  
            Rename File
        </button>
        
    </div>
  )
}

export default FileContextMenu