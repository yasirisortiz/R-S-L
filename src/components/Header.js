import React from "react"

import Logo from '../img-sp/spinLogo.png'

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: [
        { title: "Home", href: "#intro"},
        { title: "Media", href: "#portfolio"},
        { title: "About", href: "#about"},
        { title: "Contact Us", href: "#contact"},
      ]
    }
  }
  
  render() {
    return (
      <header id="header" className="fixed-top">
        <div className="container">
          <div className="logo float-left">
            <a href="#intro" className="scrollto">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </a>
          </div>
          <nav className="main-nav float-right d-none d-lg-block">
            <ul>
              {this.state.active.slice().map((active) => (
                <li key={active.href} className="active">
                  <a href={active.href}>{active.title}</a>
                </li>
              ))}              
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
