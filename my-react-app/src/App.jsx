import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dash from './components/Dashboard'
import {lazy,Suspense} from 'react';
const Dashboard = lazy(()=> import('./components/Dashboard'))
function App() {


  return (
    <Suspense fallback = "loading...">
    <>
     <Dashboard/>
    </>
    </Suspense>
  )
}

export default App
