import React from 'react';
import Pokeball from '../img/pokeball.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar-content">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={Pokeball} width="50" height="50" alt="" loading="lazy" />
            <span className="text-warning">Blog-Quote</span>
          </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item p-3">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item p-3">
                  <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
                </li>
                <li className="nav-item p-3">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item p-3">
                  <NavLink className="nav-link" to="/contact" >Contact</NavLink>
                </li>
              </ul>
                  <span style={{height:"30px",width:"30px",borderRadius:"50%",background:"black",color:"white",lineHeight:"30px",textAlign:"center",fontSize: "12px"}}>Mr.J</span>
            </div>
        </div>
      </nav>
    </div>

  );
}

export default Navbar;