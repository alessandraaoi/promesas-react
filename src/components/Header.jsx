import React from 'react'
import { Link } from 'react-router-dom'

function Header() {


  return (
    <>
    <header className='header'>
    <h1 className='header__title'>Header Title</h1>
    <nav className='header__nav'>
        <ul className='header__list'>
            <li className='header__list__item'><Link to={'/APIstore'} className='header__list__link'>Store</Link></li>
            <li className='header__list__item'><Link to={'/APIusers'} className='header__list__link'>Users</Link></li>
            <li className='header__list__item'><Link to={'/APIdd'} className='header__list__link'>Dungeons and Dragons</Link></li>
            <li className='header__list__item'><Link to={'/APIr&m'} className='header__list__link'>Rick and Morty</Link></li>
            <li className='header__list__item'><Link to={'/APIpokemon'} className='header__list__link'>Pokemons</Link></li>
        </ul>
    </nav>
    </header>
    </>
  )
}

export default Header
