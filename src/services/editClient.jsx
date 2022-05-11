import React from 'react'

const editClient = async(id,values) => {
 const URL=`${import.meta.env.VITE_API_URL}/${id}`
 const req=await fetch(URL,{
     method:"PUT",
     body: JSON.stringify(values),
     headers: {
       "Content-Type": "application/json",
     },
 })
 const resp=await req.json()
 return resp
}

export default editClient