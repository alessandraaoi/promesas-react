import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Componente1 from './pages/Componente1';
import Componente2 from './pages/Componente2';
import Componente3 from './pages/Componente3';
import Componente4 from './pages/Componente4';
import Componente5 from './pages/Componente5';
import './css/style.css';
import Detalles_Componente1 from './pages/Detalles_Componente1';
import Detalles_Componente4 from './pages/Detalles_Componente4';


ReactDOM.createRoot(document.getElementById('root')).render(

  <Router>

    <Header/> 

    <Routes>

      <Route path = {'/APIstore'} element = {<Componente1/>}/>
      <Route path = {'/APIusers'} element = {<Componente2/>}/>
      <Route path = {'/APIdd'} element = {<Componente3/>}/>
      <Route path = {'/APIr&m'} element = {<Componente4/>}/>
      <Route path = {'/APIpokemon'} element = {<Componente5/>}/>
      <Route path = {'/APIstore/:id'} element = {<Detalles_Componente1/>}/>
      <Route path = {'/APIr&m/:idd'} element = {<Detalles_Componente4/>}/>


    </Routes>

  </Router>

)
