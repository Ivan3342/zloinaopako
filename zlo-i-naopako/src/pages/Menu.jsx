import React from 'react'
import MenuItem from '../components/MenuItem'

function Menu() {
  return (
    <>
      <main className='p-10'>
        <h1 className='text-center text-5xl font-bold mb-10 w-fit mx-auto'>Meni</h1>
        <h2 className='text-3xl font-medium'>Kafe</h2>
        <div className='grid grid-cols-1 justify-start items-center my-5 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6'>
          <MenuItem name='Espresso' price='190' url='\images\menuitems\espresso.png'/>
          <MenuItem name='Domaća kafa' price='170' url='\images\menuitems\domaca.png'/>
          <MenuItem name='Cappuccino' price='220' url='\images\menuitems\capuccino.png'/>
          <MenuItem name='Espresso sa ukusom' price='270' description='Vanila, Čokolada, Malina...' url='\images\menuitems\maciato.png'/>
        </div>

        <h2 className='text-3xl font-medium'>Kokteli</h2>
        <div className='grid grid-cols-1 justify-start items-center my-5 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6'>
          <MenuItem name='Negroni' price='450' url='\images\menuitems\negroni.png'/>
          <MenuItem name='Vodka Martini' price='510' url='\images\menuitems\vodkamartini.png'/>
          <MenuItem name='Blue Lagoon' price='370' url='\images\menuitems\bluelagoon.png'/>
          <MenuItem name='Old Fashioned' price='420' url='\images\menuitems\oldfashioned.png'/>
        </div>
      </main>
    </>
  )
}

export default Menu