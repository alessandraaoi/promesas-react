import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';


function Detalles_Componente4() {

    let {idd} = useParams(); 

    const [detalles, setDetalles] = useState([])

    let controller = new AbortController();
    let opciones = {
      method: 'GET',
      mode: 'cors',
      headers: {'Content-Type' : 'application/json'},
      signal : controller.signal
    }

    useEffect(()=>{
      fetch ( 'https://rickandmortyapi.com/api/character/'+ idd, opciones )
      .then (response => response.json())
      .then (data => setDetalles(data))
      .catch (error => console.log(error))
      .finally (() => controller.abort())
    }, [])

  return (
    <>
    <h1 className='detallesC4__title'>{detalles.name}</h1>
    
    <p className='flecha'><Link to = {'/APIr&m'} className='flecha__link'>	&larr; </Link></p>

    <div className='detallesC4__card'>
      <img src={detalles.image} className='detallesC4__img'></img>
      <p className='detallesC4__description'>{detalles.gender}, {detalles.status}, {detalles.species} </p>

    </div>

    </>
  )
}

export default Detalles_Componente4
