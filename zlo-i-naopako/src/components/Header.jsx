import React from 'react'
import '../app.css'
import { NavLink } from 'react-router';

function Header() {

    const toggleMenu = () => {
        const menu = document.querySelector("#menu");
        menu.classList.toggle("hidden");
        menu.classList.toggle("fixed");
        menu.classList.toggle("flex");
    }

  return (
    <>
    <div id='menu' className='hidden z-999  bg-white h-screen w-screen p-10 flex-col justify-between items-end gap-10'>
        <button onClick={toggleMenu}><img className='w-12 hover:cursor-pointer' src="src\assets\images\close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></button>
        <div className='flex flex-col items-center justify-center mx-auto my-auto gap-5'>
          <NavLink onClick={toggleMenu} to="/" className='px-10 py-3 text-black font-bold text-xl border-black border-2 rounded-lg cursor-pointer hover:bg-[#0000001e] hover:shadow-xl transition-all hover:scale-105 w-50 text-center'>POCETNA</NavLink>
          <NavLink onClick={toggleMenu} to="/menu" className='px-10 py-3 text-black font-bold text-xl border-black border-2 rounded-lg cursor-pointer hover:bg-[#0000001e] hover:shadow-xl transition-all hover:scale-105 w-50 text-center'>MENI</NavLink>
          <a href="https://maps.app.goo.gl/QKjB52n812CXhGyx8" className='px-10 py-3 text-black font-bold text-xl border-black border-2 rounded-lg cursor-pointer hover:bg-[#0000001e] hover:shadow-xl transition-all hover:scale-105 w-50 text-center'>LOKACIJA</a>
          <NavLink onClick={toggleMenu} to="/gallery" className='px-10 py-3 text-black font-bold text-xl border-black border-2 rounded-lg cursor-pointer hover:bg-[#0000001e] hover:shadow-xl transition-all hover:scale-105 w-50 text-center'>GALERIJA</NavLink>
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