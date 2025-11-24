import { useParams } from "react-router-dom"
import EditorComponents from "../components/molecules/EditorComponent/EditorComponents";
import EditorButton from "../components/atoms/EditorButton/EditorButton.jsx"

const ProjectPlayground = () => {

    const projectId = useParams();

  return (
    <>
    <EditorComponents />
    <EditorButton isActive={true} />
    <EditorButton isActive={false} />
    </>
  )
}

export default ProjectPlayground