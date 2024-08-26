import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UseRedSample from './UseRedSample.jsx'
import UseCallbackSample from './UseCallbackSample.jsx'
import TopComp from './TopComp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UseRedSample/> */}
    {/* <UseCallbackSample/> */}
    <TopComp/>
  </StrictMode>,
)
