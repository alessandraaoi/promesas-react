import React from 'react';
import { useState, useEffect } from "react";

function Componente5() {

  const [pokemons, setPokemons] = useState([]);


  useEffect(() => {

    let controller = new AbortController();
    let opciones = {
      method: 'GET',
      mode: 'cors',
      headers: {'Content-Type' : 'application/json'},
      signal : controller.signal
    }

    fetch ('https://pokeapi.co/api/v2/pokemon-species/', opciones)
    .then (response => response.json())
    .then (pokemons => setPokemons(pokemons.results))
    .catch (error => console.log(error))
    .finally (() => controller.abort())

  }, [])

   
  return (
    <>
    
    <h1 className='c5__title'>Pokemon API</h1>
    <p className='c5__subtitle'>Pokemons</p>
     <ul className='c5__list'>
      {pokemons.map((element, index) => {
      return (
        <li key = {index} className='c5__listItem'>{element.name}</li>
      )
      
    })}
    </ul>
    </>
  )
} 

export default Componente5
