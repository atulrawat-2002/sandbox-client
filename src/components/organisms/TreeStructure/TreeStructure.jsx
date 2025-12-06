import { useEffect } from "react";
import { useTreeStructureStore } from "../../../store/treeStructureStore.js";
import TreeNode from "../../molecules/TreeNode/TreeNode.jsx";
import { useFileContextMenuStore } from "../../../store/fileContextMenuStore.js";
import FileContextMenu from "../../molecules/contextMenu/FileContextMenu.jsx";

const TreeStructure = () => {

    const {treeStructure, setTreeStructure} = useTreeStructureStore();
    const {
      x: fileContextX,
      y: filecontextY,
      isOpen: isFileContextOpen,
      file
    } = useFileContextMenuStore();

    useEffect(() => {
        
        setTreeStructure()

    }, [setTreeStructure])

  return (
    <>  
      {
        isFileContextOpen && fileContextX && filecontextY && (
          <FileContextMenu 
            x = {fileContextX}
            y = {filecontextY}
            path = {file}
          />
        )
      }
        <TreeNode fileFolderData={treeStructure} />
    </>
  )
}

export default TreeStructure