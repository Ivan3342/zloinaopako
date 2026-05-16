import React from 'react'
import MenuItem from '../components/MenuItem'

function Menu() {
  return (
    <>
      <main className='p-10'>
        <h1 className='text-center text-5xl font-bold mb-10 w-fit mx-auto'>Meni</h1>
        <h2 className='text-3xl font-medium'>Kafe</h2>
        <div className='grid grid-cols-2 justify-start items-center my-5 gap-2'>
          <MenuItem name='Espresso' price='190' url='\src\assets\images\menuitems\espresso.png'/>
          <MenuItem name='Domaća kafa' price='170' url='\src\assets\images\menuitems\domaca.png'/>
          <MenuItem name='Cappuccino' price='220' url='\src\assets\images\menuitems\capuccino.png'/>
          <MenuItem name='Espresso sa ukusom' price='270' description='Vanila, Čokolada, Malina...' url='\src\assets\images\menuitems\maciato.png'/>
        </div>

        <h2 className='text-3xl font-medium'>Kokteli</h2>
        <div className='grid grid-cols-2 justify-start items-center my-5 gap-2'>
          <MenuItem name='Negroni' price='450' url='\src\assets\images\menuitems\negroni.png'/>
          <MenuItem name='Vodka Martini' price='510' url='\src\assets\images\menuitems\vodkamartini.png'/>
          <MenuItem name='Blue Lagoon' price='370' url='\src\assets\images\menuitems\bluelagoon.png'/>
          <MenuItem name='Old Fashioned' price='420' url='\src\assets\images\menuitems\oldfashioned.png'/>
        </div>
      </main>
    </>
  )
}

export default Menu