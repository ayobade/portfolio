import React from 'react'
import './App.css'
import Sidebar from './components/leftside.jsx'
import Center from './components/center.jsx'
import Right from './components/right.jsx'

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
     <Center />
     <Right />
    </div>
  )
}


