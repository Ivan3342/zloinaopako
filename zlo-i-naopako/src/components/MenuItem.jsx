import React from 'react'
import '../app.css'

function MenuItem(props) {

    return (
        <>
            <div className=' shadow-xs p-2 bg-toffee-brown-50 border-2 border-dark-coffee-100 rounded-xl w-auto h-80 flex flex-col items-center justify-between hover:shadow-lg hover:scale-102 transition-transform'>
                <div className='w-full h-40 rounded-lg'>
                    <img
                        src={props.url}
                        alt={props.name}
                        className='w-full h-50 object-center object-cover rounded-lg'
                    />
                </div>
                <div className='text-center'>
                    <h1 className='font-bold text-md lg:text-lg'>{props.name}</h1>
                    <p className='italic text-xs lg:text-sm'>{props.description}</p>
                    <p className='text-lg lg:text-xl'>{props.price} din.</p>
                </div>
            </div>
        </>
    )
}

export default MenuItem