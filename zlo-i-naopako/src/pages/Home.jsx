import { NavLink } from 'react-router'
import '../app.css'


function Home() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <main>
        {/* main */}
        <div className='flex flex-col items-center justify-center bg-[url("/images/pexels-fewmiracles-497047241-20011903.webp")] bg-center bg-cover bg-no-repeat h-full py-30 bg-opacity-50 bg-black/30' >

          <div>
            <p className='text-center text-dark-coffee-100/70 text-sm md:text-lg lg:text-lg xl:text-xl'>Dobrodošli</p>
            <h1 className='text-center text-white text-2xl font-thin italic w-full px-5 md:px-0 md:text-3xl lg:text-3xl xl:text-4xl'>Mesto gde se loše ideje pretvaraju u <span className='underline font-normal text-shadow-md'>najbolje uspomene.</span></h1>

            <div className='mt-10 mb-15'>
              <img className='w-10 h-10 rotate-180 mx-auto' src="/images/icons/arrow_warm_up_25dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
            </div>
          </div>

          <div className='flex flex-col sm:flex-row w-full text-white items-center justify-center md:w-auto'>

            <div className='grow p-5 flex items-center justify-center gap-2'>
              <svg className='lg:scale-120' xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FFFFFF"><path d="M240-120v-80h200v-200L120-760v-80h720v80L520-400v200h200v80H240Zm58-560h364l72-80H226l72 80Zm182 204 111-124H369l111 124Zm0 0Z" /></svg>
              <span>
                <h3 className='text-sm lg:text-lg font-medium'>Craft kokteli</h3>
                <p className='text-xs lg:text-sm font-light'>Pažljivo birani</p>
              </span>

            </div>

            <div className='grow sm:border-r sm:border-l border-white p-5 flex items-center justify-center gap-2'>
              <svg className='lg:scale-120' xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FFFFFF"><path d="M440-240q-117 0-198.5-81.5T160-520v-240q0-33 23.5-56.5T240-840h500q58 0 99 41t41 99q0 58-41 99t-99 41h-20v40q0 117-81.5 198.5T440-240ZM240-640h400v-120H240v120Zm200 320q83 0 141.5-58.5T640-520v-40H240v40q0 83 58.5 141.5T440-320Zm280-320h20q25 0 42.5-17.5T800-700q0-25-17.5-42.5T740-760h-20v120ZM160-120v-80h640v80H160Zm280-440Z" /></svg>
              <span>
                <h3 className='text-sm lg:text-lg font-medium'>Premium kafa</h3>
                <p className='text-xs lg:text-sm font-light'>Kafa sa najegzotičnijih destinacija</p>
              </span>
            </div>

            <div className='grow p-5 flex items-center justify-center gap-2'>
              <svg className='lg:scale-120' xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FFFFFF"><path d="M324-111.5Q251-143 197-197t-85.5-127Q80-397 80-480t31.5-156Q143-709 197-763t127-85.5Q397-880 480-880t156 31.5Q709-817 763-763t85.5 127Q880-563 880-480t-31.5 156Q817-251 763-197t-127 85.5Q563-80 480-80t-156-31.5ZM707-253q93-93 93-227 0-64-24-123t-69-104L480-480v-320q-134 0-227 93t-93 227q0 134 93 227t227 93q134 0 227-93Z" /></svg>
              <span>
                <h3 className='text-sm lg:text-lg font-medium'>Kasno radno vreme</h3>
                <p className='text-xs lg:text-sm font-light'>Pon-Ned do 00h</p>
              </span>
            </div>

          </div>
        </div>
        {/* about */}
        <div className='mt-10 p-10 flex flex-col gap-10 md:flex-row max-w-250 mx-auto'>

          <div>
            <div>
              <h1 className='text-lg lg:text-xl xl:text-2xl font-bold'>O nama</h1>
              <h3 className='text-xl lg:text-2xl xl:text-3xl font-medium'>Autentično mesto za autentične ljude.</h3>
            </div>
            <p className='mt-3 text-justify'>Kažu da se najbolje priče dešavaju kad krene po zlu. Mi smo tu da tim pričama damo ukus. Uz pažljivo birane craft koktele, atmosferu koja ne poznaje kompromise i ekipu koja zna zašto ste tu, nudimo utočište svima koji traže nešto autentično. Vidimo se na naopakoj strani grada.</p>
          </div>

          <div className="grid grid-cols-2 gap-2 items-start">

            <div className="flex flex-col gap-2">
              <img className='w-120 rounded-2xl' src="/images/491439758_18303200647214596_1581392481911890914_n.webp" alt="Slika 1" />
              <img className='w-120 rounded-2xl' src="/images/650255411_18069660719535122_2794960922065814740_n.webp" alt="Slika 1" />
            </div>

            <div className="flex flex-col gap-2 mt-7">
              <img className='w-120 rounded-2xl' src="/images/625219192_18112245100572587_7847014058427154450_n.webp" alt="Slika 1" />
              <img className='w-120 rounded-2xl' src="/images/591138357_18330880387214596_7029328306488975246_n.webp" alt="Slika 1" />
            </div>

          </div>


        </div>

        {/* kafa za poneti */}

        <div className='relative overflow-hidden m-10 p-10 rounded-xl bg-[url("/images/texture.webp")] flex gap-5 flex-col text-white text-shadow-md md:flex-row items-center justify-center'>          
          
          <div
            className='absolute inset-0 z-0 bg-[url("/images/texture.webp")] blur-xs opacity-95'
            aria-hidden="true"
          ></div>
          
          <h1 className='z-10 grow text-2xl font-black text-center md:text-3xl lg:text-5xl'>Tvoj omiljeni ritual, sada u pokretu.</h1>
          <div className='z-10 grow text-center md:text-left my-2'>
            <p>Neki kažu da je kafa za poneti samo usputna stanica. Za nas, to je tvojih pet minuta čistog uživanja gde god da si krenuo. Spakovali smo vrhunski kvalitet, prepoznatljiv balans ukusa i prepoznatljiv dizajn u šolje koje savršeno pristaju tvom ritmu.</p>
            <p>Bilo da ti treba jutarnje buđenje ili popodnevni restart, Zlo i Naopako kafa za poneti je tu da ti drži tempo.</p>
            <p className='text-lg italic mt-5 lg:text-xl'>Jer dobra kafa nije luksuz, nego potreba.</p>
          </div>
        </div>

        <div className='flex flex-col p-10 gap-10 md:flex-row md:justify-center'>

          {/* menu */}
          <div className='md:grow text-center'>

            <div className='flex flex-col gap-5 items-center justify-center h-100 rounded-xl bg-[url("/images/69.webp")] bg-no-repeat bg-cover'>
              <h3 className='text-white text-lg'>MENI</h3>
              <h1 className='text-white text-2xl font-medium'>Otkrijte našu ponudu</h1>
              <div className='w-50 h-0.5 bg-white'></div>
              <NavLink onClick={scrollToTop} to="/menu" className='hover:underline hover:shadow-xl px-10 py-3 text-white font-bold text-xl border-white border-2 rounded-lg bg-[#00000087] cursor-pointer hover:bg-black transition-all hover:scale-105'>MENI</NavLink>
            </div>

          </div>
          {/* maps */}
          <div className='md:grow text-center'>

            <div className='flex flex-col gap-5 items-center justify-center h-100 rounded-xl bg-[url("/images/59.webp")] bg-no-repeat bg-cover bg-center'>
              <h3 className='text-white text-lg'>LOKACIJA</h3>
              <h1 className='text-white text-2xl font-medium'>Saznajte kako doći do nas</h1>
              <div className='w-50 h-0.5 bg-white'></div>
              <a href='https://maps.app.goo.gl/QKjB52n812CXhGyx8' className='hover:underline hover:shadow-xl px-10 py-3 text-white font-bold text-xl border-white border-2 rounded-lg bg-[#00000087] cursor-pointer hover:bg-black transition-all hover:scale-105'>OTVORI MAPE</a>
            </div>

          </div>

        </div>


      </main>
    </>
  )
}

export default Home