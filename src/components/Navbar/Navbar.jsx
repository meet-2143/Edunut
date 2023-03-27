import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logoos.png'
import search from '../../asssets/pic_1.png'
import Avatar from '../Avatar/Avatar'
import './Navbar.css'
const Navbar = () => {

var User=null

  return (
    <nav className='main-nav'>
<div className='navbar'>
<Link to='/' className='nav-item nav-logo'>
    <img src={logo} alt='logo' />
</Link>
<Link to='/' className='nav-item nav-btn'>About</Link>
<Link to='/' className='nav-item nav-btn'>Notes</Link>
<Link to='/' className='nav-item nav-btn'>Roadmaps</Link>
<Link to='/' className='nav-item nav-btn'>Video Solution</Link>
<Link to='/' className='nav-item nav-btn'>For Teams</Link>
<form>
<input type="text" placeholder='Search....' />
<img src={search} alt="search" width="18" className="search-icon"/>
</form>
{ User === null ? 
<Link to='/Auth' className='nav-item nav-links'>Log in</Link>:
<>
<Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link to='/User'style={{color:"white",textDecoration:'none'}} >M</Link></Avatar>
<button className="nav-item nav-links">Log out</button>
</>
}
</div>
    </nav>
  )
}

export default Navbar