import React from 'react';
import { useState, useEffect } from "react";

function Componente3() {

  const [dragons, setDragons] = useState([]);


  useEffect(() => {

    let controller = new AbortController();
    let opciones = {
      method: 'GET',
      mode: 'cors',
      headers: {'Content-Type' : 'application/json'},
      signal : controller.signal
    }

    fetch ('https://www.dnd5eapi.co/api/skills/', opciones)
    .then (response => response.json())
    .then (dragons => setDragons(dragons.results))
    .catch (error => console.log(error))
    .finally (() => controller.abort())

  }, [])

   
  return (
    <>
    
    <h1 className='c3__title'>Dungeons and Dragons API</h1>
    <p className='c3__subtitle'>Habilidades</p>
     <ul className='c3__list'>
      {dragons.map((element, index) => {
      return (
        <li key = {index} className='c3__listItem'>{element.name}</li>
      )
      
    })}
    </ul>
    </>
  )
} 

export default Componente3
