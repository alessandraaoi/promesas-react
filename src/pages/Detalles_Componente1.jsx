import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Detalles_Componente1() {

    let {id} = useParams(); 

    const [detalles, setDetalles] = useState([])

    let controller = new AbortController();
    let opciones = {
      method: 'GET',
      mode: 'cors',
      headers: {'Content-Type' : 'application/json'},
      signal : controller.signal
    }

    useEffect(()=>{
      fetch ( 'https://fakestoreapi.com/products/'+ id, opciones )
      .then (response => response.json())
      .then (data => setDetalles(data))
      .catch (error => console.log(error))
      .finally (() => controller.abort())
    }, [])

  return (
    <>
    
    <h1 className='detallesC1__title'>{detalles.title}</h1>
    <p className='detallesC1__subtitle'>{detalles.category}</p>
    <br/>
    <p className='flecha'><Link to = {'/APIstore'} className='flecha__link'>	&larr; </Link></p>
    
    <div className='detallesC1__card'>
      <img src={detalles.image} className='detallesC1__img'></img>
      <p className='detallesC1__description'>{detalles.description}</p>
      <p className='detallesC1__price'>${detalles.price}</p>
    </div>

    </>
  )
}

export default Detalles_Componente1
