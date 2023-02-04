import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h2>Police Sign Up</h2>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <label>Adharcard number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter adharcard number"
            min = "16" max = "16"
          />
        </div>
        <div className="mb-3">
          <label>Full name</label>
          <input
            type="name"
            className="form-control"
            placeholder="Enter name"
          />
        </div>
        <div className="mb-3">
          <label>rank</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter rank"
            min = "1" max = "3"
          />
        </div>
        <div className="mb-3">
          <label>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter date of birth"
            
          />
        </div>

        <div className="mb-3">
          <label>Mobile no</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter mobile number"
          />
        </div>


        <div className="d-grid mb-0">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/police-sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}