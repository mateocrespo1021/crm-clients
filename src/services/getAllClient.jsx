import React from 'react'

const getAllClient = async() => {
  const URL="http://localhost:4000/clients"
  const req=await fetch(URL)
  const resp=await req.json()
  return resp
}

export default getAllClient