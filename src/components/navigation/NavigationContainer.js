import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationContainer extends Component {

  render() {
      return (
          <div>
              <div className="navigation-wrapper">
                    <NavLink exact to="/" className="nav-item" activeClassName="nav-link-active">Home</NavLink>
                    <NavLink exact to="/blog" className="nav-item" activeClassName="nav-link-active">Blog</NavLink>
                    <NavLink exact to="/family-contacts" className="nav-item" activeClassName="nav-link-active">Family Contacts</NavLink>
              </div>
          </div>
      )
  }
}