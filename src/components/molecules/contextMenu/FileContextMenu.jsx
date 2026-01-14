import { useEditorSocketStore } from "../../../store/editorSocketStore"
import { useFileContextMenuStore } from "../../../store/fileContextMenuStore"
import './FileContextMenu.css'
import RenamingModal from "./RenamingModal"


const FileContextMenu = ({x, y, path}) => {

    const { setIsOpen } = useFileContextMenuStore();
    const { editorSocket } = useEditorSocketStore();
    const { renaming, setRenaming } = useFileContextMenuStore();

    const handleDeleteFile = () => {

        editorSocket.emit("deleteFile", {
            pathToFileOrFolder: path
        })  
    }

    const handleRenameFile = (path, editorSocket) => {
        console.log("renaming the file", path);
        setRenaming(true)
    };

  return (
    <>
    { renaming ? <RenamingModal x={x} y={y} path={path} creating={false}/> :
    <div
        className="fileContectOptionsWrapper"
        style={{
            top: y,
            left: x,
            zIndex: 1,
            padding: '1px 0px',
            border: '1px solid #ababab'
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
        <button  
        className="fileContectButton" 
        onClick={() => setIsOpen(false)}
        >  
            Cancel
        </button>
        
    </div>
    
    }
    </>
  )
}

export default FileContextMenu