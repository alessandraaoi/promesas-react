import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Componente1() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {

    let controller = new AbortController();
    let opciones = {
      method: 'GET',
      mode: 'cors',
      headers: {'Content-Type' : 'application/json'},
      signal : controller.signal
    }

    fetch ('https://fakestoreapi.com/products', opciones)
    .then (response => response.json())
    .then (data => setProductos(data))
    .catch (error => console.log(error))
    .finally (() => controller.abort())

  }, [])
   
  return (
    <>
    
    <h1 className="c1__title">Fake Store API</h1>
    <p className="c1__subtitle">Descubre nuestros productos</p>
    <br/>
    <ul className="c1__list">
      {productos.map((producto, index) => 
      <li key = {index} className="c1__listItem"><img src={producto.image} className="c1__img"></img><Link to = {`/APIstore/${producto.id}`} className="c1__link"><p className="c1__list__text">{producto.title}</p></Link> </li> 
      ) } 
    </ul>
    </>
  )
}

export default Componente1
