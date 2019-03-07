import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <header className="header header-fixed header-transparent text-white">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg">
                        <Link className="navbar-brand" to="/">
                            <img src="images/logo.svg?1" alt="logo" width="150" className="logo" />
                        </Link>
                        <button id="mobile-nav-toggler" className="hamburger hamburger--collapse" type="button">
                           <span className="hamburger-box">
                              <span className="hamburger-inner"></span>
                           </span>
                        </button>

                        <div className="navbar-collapse" id="main-nav">
                            <ul className="navbar-nav mx-auto" id="main-menu">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Contact us</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav extra-nav">
                                <li className="nav-item">
                                    <Link className="nav-link toggle-search" to="#">
                                        Rp. AMOUNT
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}   

export default Navbar