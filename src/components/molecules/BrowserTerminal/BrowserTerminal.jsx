import { Terminal } from "@xterm/xterm"
import { FitAddon } from "@xterm/addon-fit"
import '@xterm/xterm/css/xterm.css'
import { useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import { AttachAddon } from "@xterm/addon-attach"

export const BrowserTerminal = () => {

    const terminalRef = useRef(null)
    const socket = useRef(null)
    const  { projectId: projectIdFromUrl }  = useParams();

    useEffect(() => {

        const term = new Terminal({
            cursorBlink: true,
            theme: {
                background: "#1c2027",
                foreground: "#f8f8f3",
                cursorAccent: "#f8f8f3",
            },
            fontSize: 16,
            fontFamily: "Courier New",
            convertEol: true
        })
        
        term.open(terminalRef.current);
        let fitAddon = new FitAddon()
        term.loadAddon(fitAddon);
        fitAddon.fit()

        const ws = new WebSocket("ws://localhost:3000/terminal?projectId="+projectIdFromUrl);
        
        ws.onopen = () => {
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
        ref={terminalRef}
            style={{
                height: "25vh",
                overflow: "auto",
            }}
            className="terminal"
            id="terminal-container"
        >

        </div>
    )
}