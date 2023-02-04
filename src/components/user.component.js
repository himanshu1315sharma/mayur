import React, { Component } from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
export default class User extends Component {
  render() {
    return (
 
 
 
        <div className="row">
        <h2>are you a existing user?</h2>
        <div className="container">
          <div className="col-xs-6 mb-3">
          <a href="/sign-in" class="btn btn-info" role="button">Login Button</a>
            
          </div>
          <div className="col-xs-6 mb-3">
          <a href="/sign-up" class="btn btn-info" role="button">Sign up Button</a>
          </div>
        </div>
      </div>



            )
    }
            }