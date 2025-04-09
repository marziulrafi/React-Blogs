import './App.css'
import Navbar from './components/navbar/Navbar'
import Blogs from './components/blogs/blogs'
import { useState } from 'react'

function App() {

  const [bookmarked, setBookmarked] = useState([]);
  const handleBookmark=(blog)=> {
    setBookmarked([...bookmarked,blog])
  }
  console.log(bookmarked);


  return (
    <>
      <Navbar></Navbar>
      

      <div className='main-container flex text-center'>

        <div className='left-container w-[70%]'>
       
        <Blogs handleBookmark={handleBookmark}></Blogs>
        </div>
        <div className="right-container w-[30%]">
         <h1>Reading Time : 0</h1>
         <h1>Bookmark Count : 0</h1>

         {
          bookmarked.map((marked)=><p>{marked.title}</p>)
         }
        </div>
      </div>
    </>
  )
}

export default App
