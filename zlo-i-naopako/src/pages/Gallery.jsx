import React from 'react'
import GalleryItem from '../components/GalleryItem'
import '../app.css'


function Gallery() {
  return (
    <>
      <main className='p-10'>
        <h1 className='text-center text-5xl font-bold mb-10 w-fit mx-auto'>Galerija</h1>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <GalleryItem alt='Koktel ljubavi' url='\images\galleryitems\465903011_18284501230214596_1401238326098616677_n.webp' />
          <GalleryItem alt='Espresso kafa' url='\images\galleryitems\565626998_18323074471214596_159273099872721172_n.webp' />
          <GalleryItem alt='Koktel koji drzi devojka' url='\images\galleryitems\605889761_18332712685214596_9201845639208706563_n.webp' />
        </div>
      </main>
    </>
  )
}

export default Gallery