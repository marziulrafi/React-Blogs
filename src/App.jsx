import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Blogs from './components/blogs/blogs'

function App() {

  return (
    <>
      <Navbar></Navbar>
      

      <div className='main-container flex text-center'>

        <div className='left-container w-[70%]'>
       
        <Blogs></Blogs>
        </div>
        <div className="right-container w-[30%]">
         <h1>Reading Time : 0</h1>
         <h1>Bookmark Count : 0</h1>
        </div>
      </div>
    </>
  )
}

export default App
