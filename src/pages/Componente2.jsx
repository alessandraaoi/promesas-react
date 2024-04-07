import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Componente2() { 

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {

    let controller = new AbortController();
    let opciones = {
      method: 'GET',
      mode: 'cors',
      headers: {'Content-Type' : 'application/json'},
      signal : controller.signal
    }

    fetch ('https://randomuser.me/api/', opciones)
    .then (response => response.json())
    .then (usuarios => setUsuarios(usuarios.results))
    .catch (error => console.log(error))
    .finally (() => controller.abort())
  }, []);

  
   
  return (
    <>
    <h1 className='c2__title'>Random Users API</h1>
    <p className='c2__subtitle'> Refresh this page to get a new random user !</p>
    <br/>
    
    <div className='c2__card'>
       {usuarios.map((element, index) => {
  
        return (
        <>
        {/* <p>{element.location.street.name}</p> */}
        <img src={element.picture.large} className='c2__img'></img>
        
        <p className='c2__text c2__text__name'>{element.name.first}</p>
        <p className='c2__text'>{element.name.last}</p>  
        </>
        )
        
       })}
    </div>
    </>
  )
}

export default Componente2
