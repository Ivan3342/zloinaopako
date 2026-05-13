import { useState } from 'react'
import "./app.css"
import Header from './components/Header'

function App() {

  return (
    <>
      <Header></Header>
      {/* <div id='menu' className='hidden z-999  bg-white h-[100vh] w-[100vw] p-10 flex flex-col justify-between items-end gap-10'>
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
      </header> */}

      <main>
        {/* main */}
        <div className='flex flex-col items-center justify-center p-10 bg-[url("\src\assets\images\pexels-fewmiracles-497047241-20011903(2).jpg")] bg-center bg-cover bg-no-repeat h-215 bg-opacity-50' >
          <h1 className='text-center text-white text-2xl italic w-100'>Mesto gde se loše ideje pretvaraju u najbolje uspomene.</h1> 
        </div>
        {/* about */}
        <div className='p-10'>

          <h1 className='text-xl font-bold text-center'>O nama</h1>
          <h3 className='text-center m-7 font-thin text-2xl italic'>"Mesto gde se loše ideje pretvaraju u najbolje uspomene."</h3>
          <p className='text-justify'>Kažu da se najbolje priče dešavaju kad krene po zlu. Mi smo tu da tim pričama damo ukus. Uz pažljivo birane craft koktele, atmosferu koja ne poznaje kompromise i ekipu koja zna zašto ste tu, nudimo utočište svima koji traže nešto autentično. Vidimo se na naopakoj strani grada.</p>

        </div>
        {/* menu */}
        <div className='p-10 '>

          <div className='flex flex-col gap-5 items-center justify-center p-10 h-100 rounded-xl bg-[url("\src\assets\images\695702762_18350917681214596_5360166206163605931_n.webp")] bg-no-repeat bg-cover'>
            <h3 className='text-white text-lg'>MENI</h3>
            <h1 className='text-white text-2xl font-medium'>Otkrijte našu ponudu</h1>
            <div className='w-50 h-0.5 bg-white'></div>
            <button className=' px-10 py-3 text-white font-bold text-xl border-white border-2 rounded-lg bg-[#00000087] cursor-pointer hover:bg-black transition-all hover:scale-105'>MENI</button>
          </div>

        </div>
        {/* maps */}
        <div className='p-10 '>

          <div className='flex flex-col gap-5 items-center justify-center p-10 h-100 rounded-xl bg-[url("\src\assets\images\598579395_18330967441214596_7686038251437798307_n.webp")] bg-no-repeat bg-cover bg-center'>
            <h3 className='text-white text-lg'>LOKACIJA</h3>
            <h1 className='text-white text-2xl font-medium'>Saznajte kako doći do nas</h1>
            <div className='w-50 h-0.5 bg-white'></div>
            <button className=' px-10 py-3 text-white font-bold text-xl border-white border-2 rounded-lg bg-[#00000087] cursor-pointer hover:bg-black transition-all hover:scale-105'>OTVORI MAPE</button>
          </div>

        </div>


      </main>

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

export default App
