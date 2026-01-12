import { useEffect, useState } from "react";
import { useFileContextMenuStore } from "../../../store/fileContextMenuStore";
import { FaCheck } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import "./RenamingModal.css";
import { useEditorSocketStore } from "../../../store/editorSocketStore";
import { useTreeStructureStore } from "../../../store/treeStructureStore";

const RenamingModal = ({ x, y, path }) => {
  const renamingSetter = useFileContextMenuStore.getState().setRenaming;
  const {editorSocket} = useEditorSocketStore();
  const { setIsOpen } = useFileContextMenuStore();
  const {setTreeStructure} = useTreeStructureStore();
  const [name, setName] = useState(path?.split("\\")?.pop());
  let count = 0;

  function nameChanging(e) {
    // console.log(e.target.value);
    setName((prev) => (prev = e.target.value));   
  }

  function doneRenaming() {
      let oldPath = path;
      let newPath = oldPath?.split('\\');
      newPath.pop();
      newPath.push(name)
      newPath = newPath.join("\\");
      console.log(oldPath, newPath);
      
    
    editorSocket.emit("renameFile", {
      oldPath,
      newPath
    });

    editorSocket.on("fileRenameSuccess", (data) => {
        console.log("File renamed success",count++, data);
        setTreeStructure();
    })
    renamingSetter();
    setIsOpen(false);
  }

  function cancelRenaming() {
    renamingSetter();
    setIsOpen(false);
  }

  useEffect(() => {
    console.log("UseEffect in Rnaming tree modal")
  })

  return (
    <div
      className="fileContectOptionsWrapper"
      style={{
        position: "fixed",
        top: y,
        left: '150px',
        zIndex: 2,
      }}
    >
      <input
        style={{
          width: "150px",
          padding: "1px 3px",
        }}
        autoFocus={true}
        value={name}
        type="text"
        onChange={(e) => nameChanging(e)}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <button
          title="Rename File"
          style={{
            color: "cyan",
            marginRight: "1px",
          }}
          className="action-button"
          onClick={() => doneRenaming()}
        >
          <FaCheck />
        </button>
        <button
          title="cancel"
          style={{
            color: "red",
            marginLeft: "1px",
          }}
          className="action-button"
          onClick={() => cancelRenaming()}
        >
          <ImCancelCircle />
        </button>
      </div>
    </div>
  );
};

export default RenamingModal;
