import { Terminal } from "@xterm/xterm"
import { FitAddon } from "@xterm/addon-fit"
import '@xterm/xterm/css/xterm.css'
import { useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import { AttachAddon } from "@xterm/addon-attach"
import "./BrowserTerminal.css"

export const BrowserTerminal = () => {

    const terminalRef = useRef(null)
    const socket = useRef(null)
    const  { projectId: projectIdFromUrl }  = useParams();

    useEffect(() => {
        console.log("UseEffect inside Browser Terminal");
        

        const term = new Terminal({
            
            cursorBlink: true,
            theme: {
                background: "#1c2027",
                foreground: "#f8f8f3",
                cursorAccent: "#f8f8f3",
            },
            fontSize: 16,
            fontFamily: "Courier New",
            convertEol: true,
            
        })
        
        
        term.open(terminalRef.current);
        let fitAddon = new FitAddon()
        // term.loadAddon(fitAddon);
        // fitAddon.fit()
        


        const ws = new WebSocket("ws://localhost:3000/terminal?projectId="+projectIdFromUrl);
        
        ws.onopen = () => {
            console.log("Browser terminal socket connection establishing")
            const attachAddon = new AttachAddon(ws);
            term.loadAddon(attachAddon);
            socket.current = ws;

        }

        return () => {
            term.dispose()
            if (socket?.current) socket?.current.close();
        }

    }, [])

    return (
        <div
        id='browser-terminal'
        ref={terminalRef}
            
            className="terminal"
        >

        </div>
    )
}