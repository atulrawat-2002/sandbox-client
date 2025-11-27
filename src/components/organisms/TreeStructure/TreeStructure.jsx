import { useEffect } from "react";
import { useTreeStructureStore } from "../../../store/treeStructureStore.js";
import TreeNode from "../../molecules/TreeNode/TreeNode.jsx";

const TreeStructure = () => {

    const {treeStructure, setTreeStructure} = useTreeStructureStore();

    useEffect(() => {
      console.log(treeStructure)
        
        setTreeStructure()

    }, [setTreeStructure])

  return (
    <>
        <TreeNode fileFolderData={treeStructure} />
    </>
  )
}

export default TreeStructure