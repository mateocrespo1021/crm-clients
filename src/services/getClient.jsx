import React from 'react'

const getClient = async(id) => {
  const URL=`http://localhost:4000/clients/${id}`  
  const req=await fetch(URL)
  const resp= await req.json()
  return resp  
}

export default getClient