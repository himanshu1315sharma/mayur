import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Home from './components/home.component'
import User from './components/user.component'
import Police from './components/police.component'
import PoliceLogin from './components/police.login.component'
import PoliceSignup from './components/police.signup.component'
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-sm navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
              positronX
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/police'}>
                    police
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/user'}>
                    user
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/police" element={<Police />} />
              <Route path="/user" element={<User />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/police-sign-in" element={<PoliceLogin />} />
              <Route path="/police-sign-up" element={<PoliceSignup />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App