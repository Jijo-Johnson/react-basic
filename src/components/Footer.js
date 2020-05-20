import React from 'react';
import Pokeball from '../img/pokeball.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center bg-dark text-light p-1" >
                    <Link to="/">
                        <img src={Pokeball} width="50" height="50" alt="" />
                    </Link>
                </div>
                <div className="col-12 text-center bg-dark text-light pb-3" >
                    <Link className="p-2 m-2 text-light" to="/">Home</Link>
                    <Link className="p-2 m-2 text-light" to="/blogs">Blogs</Link>
                    <Link className="p-2 m-2 text-light" to="/about">About</Link>
                    <Link className="p-2 m-2 text-light" to="/contact" >Contact</Link>
                </div>
            </div>
        </div>

    );
}

export default Footer;