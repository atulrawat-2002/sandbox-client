import './EditorButton.css'

const EditorButton = ({isActive}) => {

    function handleClick(){
        // TODO: Implement click handler
    }

  return (

    <button className='editor-button' 
    style={{
        color: isActive ? 'white' : '#959eba' ,
        backgroundColor: isActive ? '#303242' : '#4a4859' ,
        borderTop: isActive ? '2px solid rgba(255, 192, 202, 1) ' : 'none' 
    }}
    onClick={handleClick}
    >
        Hey
        </button>

)
}

export default EditorButton;