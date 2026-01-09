import './EditorButton.css'
import { useActiveFileTabStore } from '../../../store/activeFileTabStore.js'
import FileIcon from '../FileIcon/FileIcon.jsx';
import { RxCross2 } from 'react-icons/rx';
import { useEditorSocketStore } from '../../../store/editorSocketStore.js';
import { handleFileTabs } from '../../../utils/extensionToFileType.js';

const EditorButton = ({isActive}) => {

    console.log("Editor button rendered", isActive);
    

    const { activeFileTab, setActiveFileTab } = useActiveFileTabStore()
    const { editorSocket } = useEditorSocketStore()
    
    let name = activeFileTab?.path?.split('\\') ;    

    function handleClick () {

        handleFileTabs({
            path: activeFileTab?.path,
            value: true
        })
        console.log("clikc on file tab");
        

    editorSocket?.emit("readFile", {
      pathToFileOrFolder: activeFileTab?.path
    });

    editorSocket?.on("readFileSuccess", (data) => {
        const fileExtension = data.path.split(".").pop();
        
    });
    
  };

    function removeFileTab () {
        handleFileTabs({
            path: activeFileTab?.path,
            value: false
        })
        console.log("removing the file tab");
        
        setActiveFileTab(null, null, null)
    }

  return (
    <>
    {name &&   <div>
        <button className='editor-button' 
    style={{
        color: isActive ? 'white' : '#959eba' ,
        backgroundColor: isActive ? '#303242' : '#4a4859' ,
        borderTop: isActive ? '2px solid rgba(255, 192, 202, 1) ' : 'none' 
    }}
    >
        <div><FileIcon extension={activeFileTab?.extension} /></div>
        <div onClick={() => handleClick()} >{`${name[name?.length - 1]}`}</div>
        <div onClick={() => removeFileTab()} ><RxCross2  /></div>
         
        </button>
    </div> }
    </>
)
}

export default EditorButton;