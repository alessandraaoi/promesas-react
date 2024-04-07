import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Componente4() {

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {

    let controller = new AbortController();
    let opciones = {
      method: 'GET',
      mode: 'cors',
      headers: {'Content-Type' : 'application/json'},
      signal : controller.signal
    }

    fetch ('https://rickandmortyapi.com/api/character', opciones)
    .then (response => response.json())
    .then (personajes => setPersonajes(personajes.results))
    .catch (error => console.log(error))
    .finally (() => controller.abort())
  }, []);



   
  return (
    <>
    <h1 className='c4__title'>Rick and Morty API</h1>
    <div className='c4__contenedor__cards'>
    {personajes.map((char, index) => {
      return (
        
        <div className='c4__card'>

          <p className='c4__text'><Link to = {`/APIr&m/${char.id}`} className='c4__link'>{char.name}</Link></p>
          <img src={char.image} className='c4__img'></img>
      
        </div>
        
      )
    })}
    </div>
    </>
  )
} 


export default Componente4
