import { useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import FileIcon from "../../atoms/FileIcon/FileIcon";
import './TreeNode.css'
import { useEditorSocketStore } from "../../../store/editorSocketStore";
import { useFileContextMenuStore } from "../../../store/fileContextMenuStore";


const TreeNode = ({ fileFolderData }) => {
  const [visiblity, setVisiblity] = useState({});
  const { editorSocket } = useEditorSocketStore()
  const {setX, setY, setIsOpen, setFile} = useFileContextMenuStore();

  const handleDoubleClick = (fileFolderData) => {
    const data = editorSocket.emit("readFile", {pathToFileOrFolder: fileFolderData?.path})
    console.log(data)
  }

  const handleContextMenuForFile = (e, path) => {
    e.preventDefault()
    setX(e.clientX)
    setY(e.clientY)
    setIsOpen(true)
    setFile(path)
  }

  const toggleVisiblity = (name) => {

    setVisiblity({
      ...visiblity,
      [name]: !visiblity[name],
    });
  };

  function computeExtension(fileFolderData) {
    const names = fileFolderData?.name.split('.')
    return names[names.length - 1]
  }

  return (
    <>
      {fileFolderData && (
        <div
          style={{
            paddingLeft: "15px",
            color: "white",
            
          }}
        >
          {fileFolderData?.children ? (
            <div className="folder" 
              style={{
                
              }}
            >
              <button
                onClick={() => {
                  toggleVisiblity(fileFolderData?.name);
                }}
                style={{
                  border: 'none',
                  outline: 'none',
                  color: 'white',
                  background: 'transparent',
                  paddingTop: '10px',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                {visiblity[fileFolderData.name] ? (
                  <SlArrowDown style={{
                    marginRight: '3px'
                  }} />
                ) : (
                  <SlArrowRight style={{
                    marginRight: '3px'
                  }} />
                )}
                {fileFolderData.name}
              </button>
            </div>
          ) : (
            <div className="files" style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '5px',
              marginTop: "10px",

            }} 
            >
              <FileIcon extension={ computeExtension(fileFolderData) } />
            <p
              style={{
                fontSize: "14px",
                cursor: "pointer",
                
              }}
              onContextMenu={(e) => handleContextMenuForFile(e, fileFolderData?.path)}
              onDoubleClick={() => handleDoubleClick(fileFolderData)}
            >
              {fileFolderData.name}
            </p>
            </div>
          )}

          {fileFolderData?.children &&
            visiblity[fileFolderData.name] &&
            fileFolderData.children.map((child) => {
              return <TreeNode key={ child.name } fileFolderData={child} />;
            })}
        </div>
      )}
    </>
  );
};

export default TreeNode;
