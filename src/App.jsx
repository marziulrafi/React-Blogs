import './App.css'
import Navbar from './components/navbar/Navbar'
import Blogs from './components/blogs/blogs'
import { useState } from 'react'

function App() {

  const [bookmarked, setBookmarked] = useState([]);
  const [readingCount, setReadingCount] = useState(0);

  const handleBookmark=(blog)=> {
    setBookmarked([...bookmarked,blog])
  }

  const handleMarkedAsRead = (time, id) => {
    const newTime = readingCount+time
    setReadingCount(newTime)
    RemoveFromBookmark(id)
  }

  const RemoveFromBookmark = (id) => {
    const remainingBookmark = bookmarked.filter((mark) => mark.id !== id);
    setBookmarked(remainingBookmark)
  }


  return (
    <>
      <Navbar></Navbar>
      

      <div className='main-container flex text-center'>

        <div className='left-container w-[70%]'>
       
        <Blogs handleBookmark={handleBookmark} handleMarkedAsRead={handleMarkedAsRead}></Blogs>
        </div>
        <div className="right-container w-[30%]">
         <h1>Reading Time : {readingCount}</h1>
         <h1>Bookmark Count : {bookmarked.length}</h1>

         {
          bookmarked.map((marked)=><p className='bg-red-500 p-2 shadow m-2 text-white'>{marked.title}</p>)
         }
        </div>
      </div>
    </>
  )
}

export default App
