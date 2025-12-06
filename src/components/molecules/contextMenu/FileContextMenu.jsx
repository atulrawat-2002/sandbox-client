import { useEditorSocketStore } from "../../../store/editorSocketStore"
import { useFileContextMenuStore } from "../../../store/fileContextMenuStore"
import './FileContextMenu.css'


const FileContextMenu = ({x, y, path}) => {

    const { setIsOpen } = useFileContextMenuStore()
    const { editorSocket } = useEditorSocketStore()

    const handleDeleteFile = () => {

        // console.log("Deleting this file ",path)

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

        }}
        onMouseLeave={() => setIsOpen(false)}
    >

        <button className="fileContectButton"
            onClick={handleDeleteFile}
        >
            Delete File
        </button>
        <button  className="fileContectButton" >  
            Rename File
        </button>
        
    </div>
  )
}

export default FileContextMenu