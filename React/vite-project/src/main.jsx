import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UseRedSample from './UseRedSample.jsx'
import UseCallbackSample from './UseCallbackSample.jsx'
import TopComp from './TopComp.jsx'
import ParentComp from './ParentComp.jsx'
import WithLogger from './WithLogger.jsx'
import Comp from './Comp.jsx'
import Test from './Test.jsx'
import NormalComp from './NormalComp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    {/* <UseRedSample/> */}
    {/* <UseCallbackSample/> */}
    {/* <TopComp/> */}
    {/* <ParentComp  /> */}
    {/* <Comp/> */}
    {/* <Test /> */}
    <NormalComp />
  </StrictMode>,
)
