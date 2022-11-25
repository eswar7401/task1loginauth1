import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './Components/Home'
import IncorrectPaswordPage from './Components/Incorrect'
import LoginPage from './Components/Login'
import Register from './Components/Register'
import Signup from './Components/SignUp'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/Incorrect-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />              
           </div>
        </Router>
    )
}
