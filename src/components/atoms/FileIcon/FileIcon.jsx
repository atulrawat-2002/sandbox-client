import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";

const FileIcon = ({ extension }) => {

    const iconStyle = {
        height: '20px',
        width: '20px'
    }

    const iconMapper = {
        'json': <VscJson  color="#fffb17ff" style={iconStyle} />,
        'js': <FaJs  color="yellow" style={iconStyle} />,
        'jsx': <FaReact  color="#17e4ffff" style={iconStyle} />,
        'css': <FaCss3  color="#fc35d1ff" style={iconStyle} />,
        'html': <FaHtml5  color="#ff2727ff" style={iconStyle} />
    }

  return (
        <>
            { 
                iconMapper[extension]
            }
        </>
  )
}

export default FileIcon