import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {BrowserRouter} from 'react-router-dom'
import { io } from 'socket.io-client'
import './index.css'
import App from './App.jsx'

const socket = io('http://localhost:3000')
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <QueryClientProvider client={queryClient} > 
    <App />
  </QueryClientProvider>
  </BrowserRouter>
)
