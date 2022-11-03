import { Component } from 'react'
import React from 'react'
import logo from '../../imgs/logo.png'
import '../../CSS/style.css'


class NavComponent extends Component {
  render () {
    return (
      <nav className='nav navbar navbar-expand-lg bg-white'>
        <div className='container-fluid'>
          <h1 className='text-start'>TobiCompany</h1>
          <ul className='nav nav-tabs'>
            <li className='nav-item'>
              <a
                className='nav-link active'
                aria-current='page'
                href='./index.html'
              >
                Inicio
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='/'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Producto
              </a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a className='dropdown-item' href=''>
                  Action
                </a>
                <a className='dropdown-item' href=''>
                  Another action
                </a>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item' href=''>
                  Something else here
                </a>
              </div>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href=''>
                Novedades
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href=''>
                Nosotros
              </a>
            </li>
            <img src={logo} width='50px' alt='' className='cart'></img>
            
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavComponent
