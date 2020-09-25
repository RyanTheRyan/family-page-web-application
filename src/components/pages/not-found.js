import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class notFound extends Component {

  render() {
      return (
          <div>
              <div className="oops-wrapper">
                  <div className="content">
                      <h1>Oops...</h1>
                      <p>We could not find this page.</p>
                      <NavLink exact to="/" activeClassName="nav-link-active">Back to Home</NavLink>
                  </div>
                  <div className="image">
                      <img src={require('../../../static/assets/images/family-sheild.png')} />
                  </div>
              </div>
          </div>
      )
  }
}