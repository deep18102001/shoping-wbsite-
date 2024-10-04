import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Pro(props) {
  let navigate = useNavigate()
  let Datafilter = props.data
  const [productdata, setproductdata] = useState([]);
  let [record , setrecord] = useState([])
  
  console.log(Datafilter,"data inside product");
  function datafetch() {
    fetch("http://localhost:4000/product")
      .then((response) => {
        return response.json(); 
      })
      .then((resp) => {
        setproductdata(resp);
        setrecord(resp)
      })
  }

  useEffect(() => {
    datafetch();
  }, []);

  function filterdata() {
    console.log(Datafilter,"Datafilter inside filterData");
    let value = Datafilter.toLowerCase()

    let filtdata = productdata.filter((val)=>{
        return val.price.toLowerCase().includes(value) || val.name.toLowerCase().includes(value)
    })
    setrecord(filtdata)
  }

  useEffect(()=>{
    filterdata()
  },[Datafilter])

  function sendData(value){
    navigate('/Productdesp',{state:value})
  }

  return (
      <div className="Prodiv">
      {
      record.map((value) => (
        <div onClick={()=>{sendData(value)}}>
          <img src= {value.image}/>
          <p>name : {value.name}</p>
          <p>price : {value.price}</p>
          <p>catgari : {value.catgari}</p>
        </div>
      ))
      }
    </div>
  );
}

export default Pro;