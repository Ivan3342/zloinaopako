import React from 'react'
import '../app.css'


function GalleryItem(props) {
  return (
    <div className='aspect-square overflow-hidden rounded-2xl'>

        <img className='w-full h-full object-cover' src={props.url} alt={props.alt} />

    </div>
  )
}

export default GalleryItem