import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
   <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
       <div className='container'>
        <Link to={'/'} className='navbar-brand'>Redux-Toolkit</Link>
        <div className='collapse navbar-collapse'>
            <ul className='navbar-nav'>
                <li className='navitem'>
                    <Link to={'/employees'} className='nav-link'>Employees</Link>
                </li>
                <li className='navitem'>
                    <Link to={'/counter'} className='nav-link'>Counter</Link>
                </li>
                <li className='navitem'>
                    <Link to={'/users'} className='nav-link'>Users</Link>
                </li>
            </ul>
        </div>
       </div>
   </nav>
  )
}

export default Nav