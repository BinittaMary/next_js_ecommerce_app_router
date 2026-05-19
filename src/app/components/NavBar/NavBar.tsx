"use client";
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";
import './NavBar.css';

function NavBar() {
  const pathname = usePathname();  
  return (        
        <div>   
            <nav className="navbar navbar-expand-lg navbar-bg-color navbar-dark" style={{backgroundColor:"#a39a4e"}} >
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className={`nav-link ${pathname === "/" ? "active" : ""}`} href='/' >Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link ${pathname === "/products" ? "active" : ""}`}  href='/products'>Products</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link ${pathname === "/aboutUs" ? "active" : ""}`}  href='/aboutUs'>About Us</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link ${pathname === "/contactUs" ? "active" : ""}`}  href='/contactUs'>Contact Us</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link ${pathname === "/cart" ? "active" : ""}`} href='/cart'>
                            <span className="d-flex justify-content-between align-items-center">
                                <i className="fas fa-shopping-cart "></i>
                                <span className="fw-normal me-3 ms-1"> Cart</span>
                            </span>   
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

  )
}

export default NavBar