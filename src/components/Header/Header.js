import React from 'react';
import siteLogo from '../../images/site-logo.png';
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <article className="container header-menu">
        <div className="logo-area">
          <img src={siteLogo} className="site-logo" alt="" />
        </div>
        <nav>
          <ul>
            <li><a href="./home">Home</a></li>
            <li><a href="./Shop">Shop</a></li>
            <li><a href="./about">About</a></li>
            <li><a href="./blogs">Blogs</a></li>
            <li><a href="./contace">Contact</a></li>
          </ul>
        </nav>
      </article>
    </header>
  );
};

const SubHeader = props => {
  return (
    <div className="sub-header">
      <div className="container">
        <input onChange={(event) => props.search(event)} type="text" placeholder="Search favourite food by category" id="search-field" />
      </div>
    </div>
  )
}

export {Header, SubHeader};