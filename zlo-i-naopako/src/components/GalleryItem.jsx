import React from 'react'
import '../app.css'


function GalleryItem(props) {
  return (
    <div>

        <img className='rounded-2xl w-auto h-fit object-cover' src={props.url} alt={props.alt} />

    </div>
  )
}

export default GalleryItem