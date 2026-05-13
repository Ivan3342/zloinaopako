import React from 'react'
import "../app.css"

function Header() {

    const toggleMenu = () => {
        const menu = document.querySelector("#menu");
        menu.classList.toggle("hidden");
        menu.classList.toggle("fixed");
    }

  return (
    <>
    <div id='menu' className='hidden z-999  bg-white h-[100vh] w-[100vw] p-10 flex flex-col justify-between items-end gap-10'>
        <button onClick={toggleMenu}><img className='w-12 hover:cursor-pointer' src="src\assets\images\close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></button>
        <div className='flex flex-col items-center justify-center mx-auto my-auto'>
          <a href="#" className='font-bold text-4xl p-1.5'>MENI</a>
          <a href="#" className='font-bold text-4xl p-1.5'>O NAMA</a>
          <a href="#" className='font-bold text-4xl p-1.5'>LOKACIJA</a>
          <a href="#" className='font-bold text-4xl p-1.5'>GALERIJA</a>
        </div>
      </div>

      <header className='bg-white flex items-center justify-between'>
        <img src="src/assets/images/zlo_i_naopako_logo.webp" alt="Cafe Logo" className='w-25 m-2.5' />
        <button id='menu-button' onClick={toggleMenu}>
          <img src="src\assets\images\menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="Menu" className='w-10 mr-10 hover:cursor-pointer' />
        </button>
      </header>
      </>
  )
}

export default Header