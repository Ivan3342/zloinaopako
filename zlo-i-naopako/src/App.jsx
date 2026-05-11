import { useState } from 'react'
import "./app.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='bg-white flex items-center justify-between'>
        <img src="src/assets/images/zlo_i_naopako_logo.webp" alt="Cafe Logo" className='w-25 m-2.5'/>
        <button id='menu-button'>
          <img src="src\assets\images\menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="Menu" className='w-10 mr-10'/>
        </button>
      </header>

      <main></main>

      <footer className='bg-dark-coffee-900 text-white p-6'>
        <div>
          <p>Potrazite nas i na</p>
          <span className='flex justify-around items-center'>
            <a href="#"><img src="src\assets\images\instagram-logo-facebook-2-svgrepo-com.svg" alt="Instagram" className='w-20'/></a>
            <a href="#"><img src="src\assets\images\facebook-svgrepo-com.svg" alt="Facebook" className='w-18'/></a>
          </span>
        </div>
        <div>
          <p>Radno vreme</p>
          <div>
            <span className='flex justify-between pt-2'>
              <h3>Ponedeljak</h3>
              <p>08:00h - 24:00h</p>
            </span>
            <span className='flex justify-between pt-2'>
              <h3>Utorak</h3>
              <p>08:00h - 24:00h</p>
            </span>
            <span className='flex justify-between pt-2'>
              <h3>Sreda</h3>
              <p>08:00h - 24:00h</p>
            </span>
            <span className='flex justify-between pt-2'>
              <h3>Četvrtak</h3>
              <p>08:00h - 24:00h</p>
            </span>
            <span className='flex justify-between pt-2'>
              <h3>Petak</h3>
              <p>08:00h - 24:00h</p>
            </span>
            <span className='flex justify-between pt-2'>
              <h3>Subota</h3>
              <p>08:00h - 24:00h</p>
            </span>
            <span className='flex justify-between pt-2'>
              <h3>Nedelja</h3>
              <p>09:00h - 24:00h</p>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
