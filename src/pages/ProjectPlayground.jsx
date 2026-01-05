import { useParams } from "react-router-dom";
import EditorComponents from "../components/molecules/EditorComponent/EditorComponents";
import EditorButton from "../components/atoms/EditorButton/EditorButton.jsx";
import TreeStructure from "../components/organisms/TreeStructure/TreeStructure.jsx";
import { useEffect } from "react";
import { useTreeStructureStore } from "../store/treeStructureStore.js";
import { io } from "socket.io-client";
import { useEditorSocketStore } from "../store/editorSocketStore.js";
import { BrowserTerminal } from "../components/molecules/BrowserTerminal/BrowserTerminal.jsx";
import Browser from "../components/organisms/Browser/Browser.jsx";
import { usePortStore } from "../store/portStore.js";
import { Allotment } from "allotment";
import 'allotment/dist/style.css';
import { Divider } from "antd";




const ProjectPlayground = () => {
  const { projectId: projectIdFromUrl } = useParams();
  const { setProjectId, projectId } = useTreeStructureStore();
  const { setEditorSocket, editorSocket } = useEditorSocketStore();
  const { port } = usePortStore();

  useEffect(() => {
    const editorSocketConnection = io(
      `${import.meta.env.VITE_BACKEND_URL}/editor`,
      {
        query: {
          projectId: projectIdFromUrl,
        },
      }
    );
    setEditorSocket(editorSocketConnection);
    setProjectId(projectIdFromUrl);
  }, [projectIdFromUrl]);

  return (
    <>
      <div
        style={{
          display: "flex",
          // flexDirection: 'column'
        }}
      >
        {projectId && (
          <div
            style={{
              minWidth: "250px",
              maxWidth: "25%",
              backgroundColor: "#333254",
              paddingTop: "0.3vh",
              height: "100vh",
              paddingRight: "10px",
              overflow: "auto",
            }}
          >
            <TreeStructure />
          </div>
        )}

        <div
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <Allotment
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                backgroundColor: "#282a36",
              }}
            >
              <Allotment vertical={true} >
                <EditorComponents />

                {/* <Divider style={{ backgroundColor: 'black', color: 'white' }} > Terminal </Divider> */}
                <BrowserTerminal />
              </Allotment>

            </div>
            {/* <EditorButton isActive={true} />
            <EditorButton isActive={false} /> */}
              {<Browser />}
          </Allotment>
        </div>
      </div>
    </>
  );
};

export default ProjectPlayground;
