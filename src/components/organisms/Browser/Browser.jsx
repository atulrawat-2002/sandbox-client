import { Row, Input } from "antd";
import { useEffect, useRef, useState } from "react";
import { IoReloadOutline } from "react-icons/io5";
import { usePortStore } from "../../../store/portStore";


const Browser = () => {

    const browserRef = useRef(null);
    const { port } = usePortStore();
    const [localPort, setLocalPort] = useState('0000');
        
    useEffect(() => {
    }, [port, localPort])

    function handleRefresh() {
        
        if(browserRef.current) {
            browserRef.current.src = `http://localhost:${port?.port}`
            setLocalPort(port?.port)
            
        }
    }

    if (!port) {
        return <div>loading....</div>
    }

   return (
    <>
    <Row
        style={{
            backgroundColor: '#22212b',
            padding: '10px'
        }}
    >
        <Input 
            style={{
                width: '100%',
                height: '30px',
                color: 'white',
                fontFamily: 'Cascadia Code',
                backgroundColor: '#282235',
                border: 'none'
            }}
            prefix={<IoReloadOutline onClick={handleRefresh} />}
            value={`http://localhost:${localPort}`}
            autoFocus={false}
            readOnly={true}
            
        >
        
        </Input>

        <iframe 
        ref={browserRef}
        src={`http://localhost:${port}`} 
        style={{
            width: '100%',
            height: '95vh',
            border: 'none'
        }}
        >
        
        </iframe>

    </Row>
    </>
   )
}

export default Browser