import React from 'react'
import Formulario from '../components/Formulario'


const NewClient = () => {
  return (
    <>
    <h2 className='font-black text-4xl text-blue-900'>New Client</h2>
    <p>Fill in the following fields to register a client</p>
    <Formulario></Formulario>
    </>
  )
}

export default NewClient