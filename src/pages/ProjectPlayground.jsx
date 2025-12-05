import { useParams } from "react-router-dom"
import EditorComponents from "../components/molecules/EditorComponent/EditorComponents";
import EditorButton from "../components/atoms/EditorButton/EditorButton.jsx"
import TreeStructure from '../components/organisms/TreeStructure/TreeStructure.jsx'
import { useEffect } from "react";
import { useTreeStructureStore } from "../store/treeStructureStore.js";
import { io } from "socket.io-client";
import { useEditorSocketStore } from "../store/editorSocketStore.js";

const ProjectPlayground = () => {

    const  { projectId: projectIdFromUrl }  = useParams();
    const { setProjectId, projectId } = useTreeStructureStore();
    const { setEditorSocket } = useEditorSocketStore()

    useEffect(() => {      
      const editorSocketConnection = io(`${import.meta.env.VITE_BACKEND_URL}/editor`, {
        query: {
          projectId: projectIdFromUrl
        }
      })
      setEditorSocket(editorSocketConnection)
      setProjectId(projectIdFromUrl)
    }, [ projectIdFromUrl])

  return (
    <div
      style={{
        display: 'flex'
      }}
    >        
    { projectId && 
      <div 
        style={{
          minWidth: '250px',
          maxWidth: '25%',
          backgroundColor: '#333254',
          paddingTop:'0.3vh',
          height: '99.7vh',
          paddingRight: '10px',
          overflow: 'auto'
        }}
      >
        <TreeStructure />
      </div>
    }
    <EditorComponents />
    {/* <EditorButton isActive={true} />
    <EditorButton isActive={false} /> */}
    </div>
  )
}

export default ProjectPlayground