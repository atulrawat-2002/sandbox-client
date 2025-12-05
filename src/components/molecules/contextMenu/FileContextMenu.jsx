
const FileContextMenu = ({x, y, path}) => {

    const handleDeleteFile = () => {
        console.log("Deleting this file ",path)
    }

  return (
    <div
        style={{
            width: '120px',
            position: 'fixed',
            top: y,
            left: x,
            border: '1.5px solid black'

        }}
    >

        <button
            onClick={handleDeleteFile}
        >
            Delete File
        </button>
        <button>
            Rename File
        </button>
        
    </div>
  )
}

export default FileContextMenu