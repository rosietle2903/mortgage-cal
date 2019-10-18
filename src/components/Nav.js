import React, { Component }  from 'react';
import { Navbar } from 'react-bulma-components';
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
       <Navbar color="success">  
       <ul class="navbar-item">
        <a>Home </a>
        <a>Calculate </a>
        <a>Post </a>
        </ul>
        

       </Navbar>

    

       

    )
}

export default Nav; 