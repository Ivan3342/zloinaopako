import React from 'react'
import '../app.css'
import { NavLink } from 'react-router';

function Header() {

  const handleClick = () => {
    toggleMenu();
    scrollToTop();
  }

  const toggleMenu = () => {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("hidden");
    menu.classList.toggle("fixed");
    menu.classList.toggle("flex");
  };

  const scrollToTop = () => {
     window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <div id='menu' className='hidden z-999 bg-white/70 backdrop-blur-md h-screen w-screen p-10 flex-col justify-between items-end gap-10'>
        <button onClick={toggleMenu}><img style={{ userSelect: 'none', WebkitUserDrag: 'none' }} className='w-12 hover:cursor-pointer hover:scale-110 transition-transform' src="\images\icons\close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></button>
        <div className='flex flex-col items-center justify-center mx-auto my-auto gap-5'>
          <NavLink onClick={handleClick} to="/" className='px-10 py-3 text-black font-bold text-xl border-black border-2 rounded-lg cursor-pointer hover:bg-[#0000000e] hover:shadow-xl hover:underline transition-all hover:scale-105 w-50 text-center'>POCETNA</NavLink>
          <NavLink onClick={handleClick} to="/menu" className='px-10 py-3 text-black font-bold text-xl border-black border-2 rounded-lg cursor-pointer hover:bg-[#0000000e] hover:shadow-xl hover:underline transition-all hover:scale-105 w-50 text-center'>MENI</NavLink>
          <a href="https://maps.app.goo.gl/QKjB52n812CXhGyx8" className='px-10 py-3 text-black font-bold text-xl border-black border-2 rounded-lg cursor-pointer hover:bg-[#0000000e] hover:shadow-xl hover:underline transition-all hover:scale-105 w-50 text-center'>LOKACIJA</a>
          <NavLink onClick={handleClick} to="/gallery" className='px-10 py-3 text-black font-bold text-xl border-black border-2 rounded-lg cursor-pointer hover:bg-[#0000000e] hover:shadow-xl hover:underline transition-all hover:scale-105 w-50 text-center'>GALERIJA</NavLink>
        </div>
      </div>

      <header className='bg-white flex items-center justify-between xl:justify-around sticky top-0' draggable='false' style={{ userSelect: 'none', WebkitUserDrag: 'none' }}>
        <img src="/images/zlo_i_naopako_logo.webp" alt="Cafe Logo" className='w-18 m-2.5' draggable='false'/>
        <button id='menu-button' onClick={toggleMenu} draggable='false'>
          <img src="\images\icons\menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="Menu" className='w-8 mr-10 hover:cursor-pointer hover:scale-110 transition-transform' draggable='false'/>
        </button>
      </header>
      </>
  )
}

export default Header