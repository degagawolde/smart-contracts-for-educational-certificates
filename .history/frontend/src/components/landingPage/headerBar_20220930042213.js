import React from 'react';
import './headerBar.css'
import logo from './logo.png'


// const connectWalletHandler = () => {

// }


const Header = () => {


    return (
        <header class="App-header">
            <div class="wrapper site-header__wrapper">
                <a href="/" class="brand"><img src={logo} alt="brand" /></a>
                <nav class="nav">
                    <a href="/">home</a>
                    <a target="_blank" rel="noreferrer noopener" href="https://tenx.10academy.org/" >tenx dashboard</a>
                    <a href="/" >connect wallet</a>
                </nav>
                
            </div>
        </header>
    )
}

export default Header