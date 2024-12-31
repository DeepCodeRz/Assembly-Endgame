import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'
import App from '../compontens/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className={"w-screen h-screen flex justify-center items-center bg-background"}>
          <App />
      </div>
  </StrictMode>,
)
