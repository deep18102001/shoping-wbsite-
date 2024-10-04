import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react';

function Productdesp() {
  let [dataget, setdataget] = useState([])


  let [plus , setplus] = useState(1)
  const location = useLocation()
  let sent = [location.state]
  console.log(location.state,"locatin");

  function addToCart(val) {
    let itemAdded = { ...val, cart: "true" }
    console.log(itemAdded, "itemAdded")
    update(val.id, itemAdded)
}

function update(id , itemAdded) {
  fetch(`http://localhost:4000/product/${id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(itemAdded)
  }).then((response) => {
      response.json().then((resp) => {
          console.log(resp, "resp");
          // setdataget(resp)
      })
  })

}


  function add() {
    setplus(plus + 1)
}

  function less() {
  if (plus > 1) {
      setplus(plus - 1)
  }
}
  return (
    <div className='Product-css'>
       {
        sent.map((prodes)=>{
          return(
            <div>
              <p>name : {prodes.name}</p>
              <p>price : {prodes.price}</p>
              <img src= {prodes.image} />
              <button onClick={less}>-</button> 
          <span>{plus}</span>
          <button onClick={add}>+</button> 
          <button onClick={()=>{addToCart(prodes)}}>AddCart</button>
            </div>

          )
        })
       }
    </div>
  )
}

export default Productdesp