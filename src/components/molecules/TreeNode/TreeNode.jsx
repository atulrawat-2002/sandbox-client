import { useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import FileIcon from "../../atoms/FileIcon/FileIcon";
import './TreeNode.css'

const TreeNode = ({ fileFolderData }) => {
  const [visiblity, setVisiblity] = useState({});

  const toggleVisiblity = (name) => {
    console.log("Clicked ", visiblity);

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
            paddingLeft: "5px",
            color: "white",
          }}
        >
          {fileFolderData?.children ? (
            <div className="folder" >
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
                  cursor: 'pointer'
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
              marginLeft: '5px'
            }} >
              <FileIcon extension={ computeExtension(fileFolderData) } />
            <p
              style={{
                // paddingTop: "9px",
                fontSize: "14px",
                cursor: "pointer",
                // marginLeft: "5px",
                
              }}
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
