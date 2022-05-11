import React from 'react'

const postClient = async(values) => {
  const URL=`${import.meta.env.VITE_API_URL}/clients`
  try {
    const req=await fetch(URL,{
        method:"POST",
        body:JSON.stringify(values),
        headers:{
          "Content-Type": "application/json",  
        }
  
    })
    const resp=await req.json()
    return resp
  } catch (error) {
      console.log(error);
  }
 
}

export default postClient