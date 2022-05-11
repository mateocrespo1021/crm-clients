import React from 'react'

const editClient = async(id,values) => {
 const URL=`http://localhost:4000/clients/${id}`
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