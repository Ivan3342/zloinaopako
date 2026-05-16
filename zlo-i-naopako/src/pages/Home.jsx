import { NavLink } from 'react-router'
import '../app.css'

function Home() {
  return (
    <>
    <main>
        {/* main */}
        <div className='flex flex-col items-center justify-center bg-[url("\src\assets\images\pexels-fewmiracles-497047241-20011903(2).webp")] bg-center bg-cover bg-no-repeat h-215 bg-opacity-50' >
          <h1 className='text-center text-white text-2xl italic w-100'>Mesto gde se loše ideje pretvaraju u najbolje uspomene.</h1> 
        </div>
        {/* about */}
        <div className='p-10'>

          <h1 className='text-xl font-bold text-center'>O nama</h1>
          <h3 className='text-center m-7 font-thin text-2xl italic'>"Mesto gde se loše ideje pretvaraju u najbolje uspomene."</h3>
          <p className='text-justify'>Kažu da se najbolje priče dešavaju kad krene po zlu. Mi smo tu da tim pričama damo ukus. Uz pažljivo birane craft koktele, atmosferu koja ne poznaje kompromise i ekipu koja zna zašto ste tu, nudimo utočište svima koji traže nešto autentično. Vidimo se na naopakoj strani grada.</p>

        </div>
        {/* menu */}
        <div className='p-10 text-center'>

          <div className='flex flex-col gap-5 items-center justify-center p-10 h-100 rounded-xl bg-[url("\src\assets\images\695702762_18350917681214596_5360166206163605931_n.webp")] bg-no-repeat bg-cover'>
            <h3 className='text-white text-lg'>MENI</h3>
            <h1 className='text-white text-2xl font-medium'>Otkrijte našu ponudu</h1>
            <div className='w-50 h-0.5 bg-white'></div>
            <NavLink to="/menu" className='hover:shadow-xl px-10 py-3 text-white font-bold text-xl border-white border-2 rounded-lg bg-[#00000087] cursor-pointer hover:bg-black transition-all hover:scale-105'>MENI</NavLink>
          </div>

        </div>
        {/* maps */}
        <div className='p-10 text-center'>

          <div className='flex flex-col gap-5 items-center justify-center p-10 h-100 rounded-xl bg-[url("\src\assets\images\598579395_18330967441214596_7686038251437798307_n.webp")] bg-no-repeat bg-cover bg-center'>
            <h3 className='text-white text-lg'>LOKACIJA</h3>
            <h1 className='text-white text-2xl font-medium'>Saznajte kako doći do nas</h1>
            <div className='w-50 h-0.5 bg-white'></div>
            <a href='https://maps.app.goo.gl/QKjB52n812CXhGyx8' className='hover:shadow-xl px-10 py-3 text-white font-bold text-xl border-white border-2 rounded-lg bg-[#00000087] cursor-pointer hover:bg-black transition-all hover:scale-105'>OTVORI MAPE</a>
          </div>

        </div>


      </main>
    </>
  )
}

export default Home