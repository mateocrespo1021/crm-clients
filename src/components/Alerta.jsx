import React from 'react'

const Alerta = ({children}) => {
  return (
        <p className='text-center my-4 bg-red-600 text-white font-bold p-3 uppercase'>{children}</p>
  )
}

export default Alerta