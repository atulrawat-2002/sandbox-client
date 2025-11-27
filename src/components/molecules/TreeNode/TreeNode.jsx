import { useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

const TreeNode = ({ fileFolderData }) => {
  const [visiblity, setVisiblity] = useState({});

  const toggleVisiblity = (name) => {
    console.log("Clicked ", visiblity);

    setVisiblity({
      ...visiblity,
      [name]: !visiblity[name],
    });
  };

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
            <div>
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
            <p
              style={{
                paddingTop: "9px",
                fontSize: "14px",
                cursor: "pointer",
                marginLeft: "5px",
                
              }}
            >
              {fileFolderData.name}
            </p>
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
