import React from 'react'

function Footer() {
  return (
    <>
    <footer className='bg-dark-coffee-900 text-dusty-olive-100 p-6'>

        <div className='flex items-center gap-50'>
          <h1 className='text-2xl font-medium text-white'>Zapratite nas!</h1>
          <span className='flex items-center'>
            <a href="#"><img className='w-10 hover:scale-110 transition-transform' src="src\assets\images\instagram-logo-facebook-2-svgrepo-com.svg" alt="Instagram Logo" /></a>
            <a href="#"><img className='w-10 hover:scale-110 transition-transform' src="src\assets\images\facebook-svgrepo-com.svg" alt="Facebook Logo" /></a>
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
            <h2 className='text-lg font-bold'>Navigacija</h2>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Home</a></li>
              <li><a href="">Home</a></li>
            </ul>
          </div>
        </div>

        <h3 className='text-center mt-7 mb-2'>&copy; 2026 Ivan Stojadinović, sva prava zadržana</h3>

      </footer>
      </>
  )
}

export default Footer