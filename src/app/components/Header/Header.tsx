import Link from 'next/link';
import React from 'react';
import logoImage from '../../assets/logo.png';
import Image from 'next/image';
import './Header.css'
import CartCountHeader from '../CartCountHeader/CartCountHeader';

function Header() {
    
  return (
        <nav className="navbar navbar-expand-lg navbar-dark main-header">
            <div className="container-fluid ">
               <Link className="navbar-brand hover-effect " href='/'>
                    <Image src={logoImage} alt={"Logo"} width={100} height={25}></Image>
                 </Link>`

        <form className="d-flex flex-grow-1 mx-2 ">
        <input className="form-control hover-effect-yellow custom-search" type="search" placeholder="Search" ></input>
        </form>

       <ul className="navbar-nav ms-3 mt-2 d-none d-lg-flex">
        <li className="nav-item hover-effect ">
            <a className="nav-link d-flex">                
            <span className="d-flex flex-column">
                <span className="bs-light">Hello,Binitta </span>
                <span className="fw-bold"> Account & Lists</span>
            </span>            
            </a>
        </li>
        <li className="nav-item hover-effect ">
            <CartCountHeader />
        </li>
        </ul>
    </div>
    </nav>
  )
}

export default Header;