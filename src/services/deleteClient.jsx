import React from 'react'

const deleteClient = async(id) => {
  const URL=`${import.meta.env.VITE_API_URL}/${id}`
  try {
    const req=await fetch(URL,{
        method:"DELETE"
    })
    const resp=await req.json()
    return resp
  } catch (error) {
      console.log(error);
  }
 
}

export default deleteClient