import React from 'react'

const getAllClient = async() => {
  const URL=`${import.meta.env.VITE_API_URL}`
  const req=await fetch(URL)
  const resp=await req.json()
  return resp
}

export default getAllClient