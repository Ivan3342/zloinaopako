import { useState } from 'react'
import "./app.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='bg-white flex items-center justify-between'>
        <img src="src/assets/images/zlo_i_naopako_logo.webp" alt="Cafe Logo" className='w-25 m-2.5' />
        <button id='menu-button'>
          <img src="src\assets\images\menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="Menu" className='w-10 mr-10' />
        </button>
      </header>

      <main>
        {/* main */}
        <div className='flex flex-col items-center justify-center p-10 bg-[url("\src\assets\images\pexels-fewmiracles-497047241-20011903(2).jpg")] bg-center bg-cover bg-no-repeat h-224 bg-opacity-50' >
          <h1 className='text-center text-white text-2xl'>Mesto gde se loše ideje pretvaraju u najbolje uspomene.</h1> 
        </div>
        {/* about */}
        <div className='p-10'>

          <h1 className='text-xl font-bold text-center'>O nama</h1>
          <h3 className='text-center m-7 font-thin text-2xl italic'>"Mesto gde se loše ideje pretvaraju u najbolje uspomene."</h3>
          <p className='text-justify'>Kažu da se najbolje priče dešavaju kad krene po zlu. Mi smo tu da tim pričama damo ukus. Uz pažljivo birane craft koktele, atmosferu koja ne poznaje kompromise i ekipu koja zna zašto ste tu, nudimo utočište svima koji traže nešto autentično. Vidimo se na naopakoj strani grada.</p>

        </div>

      </main>

      <footer className='bg-dark-coffee-900 text-dusty-olive-400 p-6'>

        <div className='flex items-center gap-50'>
          <h1 className='text-2xl font-medium text-white'>Zapratite nas!</h1>
          <span className='flex items-center'>
            <a href="#"><img className='w-10' src="src\assets\images\instagram-logo-facebook-2-svgrepo-com.svg" alt="Instagram Logo" /></a>
            <a href="#"><img className='w-10' src="src\assets\images\facebook-svgrepo-com.svg" alt="Facebook Logo" /></a>
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

export default App
