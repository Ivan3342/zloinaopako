import React from 'react'
import '../app.css'

function MenuItem(props) {

    return (
        <>
            <div className='shadow-xs p-4 bg-toffee-brown-100 rounded-xl w-58 h-80 flex flex-col items-center justify-between hover:shadow-lg hover:scale-102 transition-transform'>
                <div className='w-50 h-50 rounded-lg'>
                    <img
                        src={props.url}
                        alt={props.name}
                        className='w-50 h-50 object-cover rounded-lg'
                    />
                </div>
                <div className='text-center'>
                    <h1 className='font-medium text-xl'>{props.name}</h1>
                    <p className='italic text-sm'>{props.description}</p>
                    <p className='text-lg'>{props.price} din.</p>
                </div>
            </div>
        </>
    )
}

export default MenuItem