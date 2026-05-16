import React from 'react'
import { NavLink } from 'react-router'

function Footer() {
  return (
    <>
    <footer className='bg-dark-coffee-900 text-dusty-olive-100 p-6'>

        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-medium text-white'>Zapratite nas!</h1>
          <span className='flex items-center'>
            <a href="https://www.instagram.com/__zloinaopako/"><img className='w-10 md:w-15 hover:shadow-xl hover:scale-110 transition-transform' src="\images\icons\instagram-logo-facebook-2-svgrepo-com.svg" alt="Instagram Logo" /></a>
            <a href="https://www.facebook.com/zloinaopakokg/"><img className='w-10 md:w-15 hover:shadow-xl hover:scale-110 transition-transform' src="\images\icons\facebook-svgrepo-com.svg" alt="Facebook Logo" /></a>
          </span>
        </div>

        <div className='grid grid-cols-2 col mt-6'>
          <div>
            <h2 className='text-lg font-bold'>Kontakt</h2>
            <ul>
              <li><p className='mt-2'><span className='font-bold'>Adresa:</span><br />Tanaska Rajica, Kragujevac 34104</p></li>
              <li><p className='mt-2'><span className='font-bold'>Telefon:</span><br />0646154894</p></li>
              <li><p className='mt-2'><span className="font-bold">Email:</span><br />zloinaopako@gmail.com</p></li>
            </ul>
          </div>

          <div>
            <h2 className='text-lg font-bold text-sandy-brown-50'>Navigacija</h2>
            <ul>
              <li className='border-2 border-transparent hover:border-b-2 hover:border-b-sandy-brown-300 w-fit transition-all'><NavLink to='/'>Pocetna</NavLink></li>
              <li className='border-2 border-transparent hover:border-b-2 hover:border-b-sandy-brown-300 w-fit transition-all'><NavLink to='menu'>Meni</NavLink></li>
              <li className='border-2 border-transparent hover:border-b-2 hover:border-b-sandy-brown-300 w-fit transition-all'><a href='https://maps.app.goo.gl/QKjB52n812CXhGyx8'>Lokacija</a></li>
              <li className='border-2 border-transparent hover:border-b-2 hover:border-b-sandy-brown-300 w-fit transition-all'><NavLink to='gallery'>Galerija</NavLink></li>
            </ul>
          </div>
        </div>

        <h3 className='text-center mt-7 mb-2'>&copy; 2026 Ivan Stojadinović, sva prava zadržana</h3>

      </footer>
      </>
  )
}

export default Footer