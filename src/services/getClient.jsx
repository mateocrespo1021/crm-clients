import React from 'react'

const getClient = async(id) => {
  const URL=`${import.meta.env.VITE_API_URL}/${id}`  
  const req=await fetch(URL)
  const resp= await req.json()
  return resp  
}

export default getClient