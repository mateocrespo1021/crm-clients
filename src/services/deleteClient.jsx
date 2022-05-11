import React from 'react'

const deleteClient = async(id) => {
  const URL=`http://localhost:4000/clients/${id}`
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