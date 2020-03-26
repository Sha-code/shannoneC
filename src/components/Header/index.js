import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './HeaderStyled';
import logo from '../../assets/images/headerpicture.jpeg';

const HeaderPage = () => (
  <Header>
    <NavLink
      className="navlink logo"
      to="/"
      exact
    >

      <img src={logo} alt="logo" />
    </NavLink>
    <nav>
      <NavLink
        className="navlink"
        activeClassName="selected"
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink
        className="navlink"
        activeClassName="selected"
        to="/project"
        exact
      >
        My projects
      </NavLink>
      <NavLink
        className="navlink"
        activeClassName="selected"
        to="/about"
        exact
      >
        About
      </NavLink>
    </nav>
  </Header>
);

export default HeaderPage;
