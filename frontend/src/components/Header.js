import React from 'react'
import Dashboard from '../pages/Dashboard'
import { Link, Route } from "wouter";
import './header.css'
function Header() {

    <Route path="/dashboard" component={Dashboard} />



    return (
        <nav>
            <div className="logo">
                Jett Taşımacılık
            </div>
            <input type="checkbox" id="click" />
            <label for="click" className="menu-btn">
                <i className="fas fa-bars"></i>
            </label>
            <ul>
                <li><Link href="/dashboard/">
                    <a>Dashboard</a>
                </Link></li>
                <li><Link href="/drivers/">
                    <a>Drivers</a>
                </Link></li>       
                <li><Link href="/cars">
                    <a>Cars</a>
                </Link></li>  
                <li><Link href="/PassengerPage">
                    <a>Passengers</a>
                </Link></li>            <li><Link href="/transferspage">
                    <a>Transfers</a>
                </Link></li>
            </ul>
        </nav>
    )
}

export default Header