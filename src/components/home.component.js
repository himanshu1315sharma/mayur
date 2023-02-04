import React, { Component } from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
export default class Home extends Component {
  render() {
    return (
 
 
 
        <div className="row">
        <h2>Who are you</h2>
        <div className="container">
          <div className="col-xs-6 mb-3">
          <a href="/police" class="btn btn-info" role="button">Police Button</a>
            
          </div>
          <div className="col-xs-6 mb-3">
          <a href="/user" class="btn btn-info" role="button">User Button</a>
          </div>
        </div>
      </div>



            )
    }
            }