import React, { Component } from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
export default class Police extends Component {
  render() {
    return (
 
 
 
        <div className="row">
        <h2>are you a new user</h2>
        <div className="container">
          <div className="col-xs-6 mb-3">
          <a href="/police-sign-in" class="btn btn-info" role="button">Login Button</a>
            
          </div>
          <div className="col-xs-6 mb-3">
          <a href="/police-sign-up" class="btn btn-info" role="button">sign up Button</a>
          </div>
        </div>
      </div>



            )
    }
            }