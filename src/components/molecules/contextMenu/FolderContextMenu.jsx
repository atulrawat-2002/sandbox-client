import { useEditorSocketStore } from "../../../store/editorSocketStore"
import { useFileContextMenuStore } from "../../../store/fileContextMenuStore"
import { handleRenameFile } from "../TreeNode/TreeNode"
import './FileContextMenu.css'
import RenamingModal from "./RenamingModal"



const FolderContextMenu = ({x, y, path}) => {
  

    const { setIsOpen } = useFileContextMenuStore();
    const { editorSocket } = useEditorSocketStore();
    const { renaming, setRenaming } = useFileContextMenuStore();

    const handleDeleteFile = () => {

        editorSocket.emit("deleteFile", {
            pathToFileOrFolder: path
        })
    }

    function handleCreateFile (path, editorSocket) {
        console.log("Creating file")
    }
    
    function handleCreateFolder(path, editorSocket) {
        console.log("Creating file")

    }

  return (
    <>
    { renaming ? <RenamingModal x={x} y={y} path={path} /> :
    <div
        className="fileContectOptionsWrapper"
        style={{
            top: y,
            left: '160px',
            zIndex: 1,
            padding: '1px 0px',
            border: '1px solid #ababab',
            borderRadius: '1px',
        }}
        onMouseLeave={() => setIsOpen(false)}
    >

        <button className="fileContectButton"
            onClick={handleDeleteFile}
        >
            Delete Folder
        </button>
        <button  
        className="fileContectButton" 
        onClick={() => handleRenameFile(path, editorSocket)}
        >  
            Rename Folder
        </button>
        <button  
        className="fileContectButton" 
        onClick={() => handleCreateFolder(path, editorSocket)}
        >  
            Create Folder
        </button>
        <button  
        className="fileContectButton" 
        onClick={() => handleCreateFile(path, editorSocket)}
        >  
            Create File
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

export default FolderContextMenu