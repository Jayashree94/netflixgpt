import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-16 absolute bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold text-white '> {title}</h1>
        <p className='text-sm py-6 w-1/4 text-white'> {overview} </p>
    
    <div>
        <button className='px-10 py-4 m-2 bg-white text-black
         text-lg rounded-lg font-bold hover:bg-opacity-50'>  ▶ Play </button>
        <button className='px-10 py-4 m-2 bg-gray-500 text-white text-lg rounded-lg font-bold bg-opacity-90 hover:bg-opacity-50' > More Info </button>

    </div>
    </div>
  )
}

export default VideoTitle;