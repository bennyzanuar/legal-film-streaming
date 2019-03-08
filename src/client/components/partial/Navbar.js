import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../../helpers'

class Navbar extends Component {
    render() {
        const { current_money } = this.props
        let duit = typeof current_money.amount == 'undefined' ? 0 : current_money.amount
        // console.log(current_money);
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
                            </ul>
                            <ul className="navbar-nav extra-nav">
                                <li className="nav-item">
                                {
                                    typeof current_money !== 'undefined' &&
                                    <Link className="nav-link toggle-search" to="#">{formatCurrency(duit)}</Link>
                                }
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