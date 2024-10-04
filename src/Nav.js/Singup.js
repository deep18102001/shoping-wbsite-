import React, { useState } from 'react'

function Singup() {
  let [name , setname] = useState()
  let [number , setnumber] = useState()
  let [email , setemail] = useState()
  let [password , setpassword] = useState()
  let [data , setdata] = useState()
  
  function store(e) {
    setdata({name,number,email,password})
  }
  console.log(data,'data');

  return (
    <div className='singupapp'>
        <input type='text' placeholder='name' onChange={(e)=>{setname(e.target.value)}}/><br/>
        <input type='number' placeholder='number' onChange={(e)=>{setnumber(e.target.value)}}/><br/>
        <input type='email' placeholder='email' onChange={(e)=>{setemail(e.target.value)}}/><br/>
        <input type='password' placeholder='password' onChange={(e)=>{setpassword(e.target.value)}}/><br/>
        <input type='submit' onClick={(e)=>{store(e)}}/>
    </div>
  )
}

export default Singup