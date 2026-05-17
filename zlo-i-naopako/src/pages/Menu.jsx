import {React, useState, useEffect} from 'react'
import MenuItem from '../components/MenuItem'

function Menu() {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const coffees = items.filter(item => item.category === 'kafa');
  const cocktails = items.filter(item => item.category === 'kokteli');

  console.log(import.meta.env.VITE_API_URL)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/menu`)
      .then(res => res.json())
      .then(data => {
        setItems(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Učitavanje...</p>

  return (
    <>
      <main className='p-10'>
        <h1 className='text-center text-5xl font-bold mb-10 w-fit mx-auto'>Meni</h1>
        <h2 className='text-3xl font-medium'>Kafe</h2>
        <div className='grid grid-cols-1 justify-start items-center my-5 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6'>
          {coffees.map(item => (
            <MenuItem
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              url={item.image_url}
            />
          ))}
        </div>

        <h2 className='text-3xl font-medium'>Kokteli</h2>
        <div className='grid grid-cols-1 justify-start items-center my-5 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6'>
          {cocktails.map(item => (
            <MenuItem
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              url={item.image_url}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default Menu