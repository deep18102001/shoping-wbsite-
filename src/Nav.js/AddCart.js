import React, { useEffect, useState } from 'react'

function AddCart() {
    let [dataget, setdataget] = useState([])
    let [updataget, setupdataget] = useState([])



    function updated(id , itemAdded) {
        fetch(`http://localhost:4000/product`, {
            method: "GET",
        }).then((response) => {
            response.json().then((resp) => {
                console.log(resp, "resp");
                setdataget(resp)
            })
        })

    }
    useEffect(()=>{
        updated()
    },[])

    let adddata = dataget.filter((addcart)=>{
        return addcart.cart == 'true'
    })
    console.log(adddata, 'adddata');

    // ghhgg


    // let adddata = dataget.filter((addcart)=>{
    //     return addcart.cart == 'true'
    // })
    // console.log(adddata, 'adddata');

    
    function updatedated(id , itemAdded) {
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
                setupdataget(resp)
            })
        })
      
      }
    useEffect(()=>{
        updatedated()
    },[])

    function remove(value) {
        let updataget = value.cart = "false"
            console.log(value , 'updataget');
            updatedated(value.id,value )
        }
    
    

    return (
        <div>
            {
                adddata.map((valuedata) => {
                    return (
                        <div>
                            <p>name :{valuedata.name}</p>
                            <p>price :{valuedata.price}</p>
                            <img src={valuedata.image} />
                           <button onClick={()=>{remove(valuedata)}}> remove</button>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default AddCart