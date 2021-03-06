import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import BaseLayout from './components/BaseLayout/index'
import Home from './components/Home'
import Login from './components/Users/Login'
import Register from './components/Users/Register'
import Profile from './components/Users/Profile'
import Recipes from './components/Recipes'
import ErrorPage from './components/Recipes/ErrorPage'
import Recipe from './components/Recipes/Recipe'
import Create from './components/Recipes/Create'
import Edit from './components/Recipes/Edit'
import BuyTicket from './components/Recipes/BuyTicket'
import LoginUser from './components/Users/LoginUser'
import LoginPrivilege from './components/LoginPrivilege/LoginPrivilege'
import NavbarUser from './components/BaseLayout/UserNavbar'
import HomeUser from './components/Home/HomeUser'
import UserOptions from './components/Recipes/UserOptions'

class App extends Component {
    render() {
        return (
            <div className='app'>
                <BrowserRouter>
                    <Route exact path='/' component = { Home } />
                    <Switch>
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/recipes" component={Recipes} />
                        <Route exact path="/errorpage" component={ErrorPage} />
                        <Route exact path="/recipes/:id" component={Recipe} />
                        <Route exact path="/create" component={Create} />
                        <Route exact path="/recipes/:id/edit" component={Edit} />
                        <Route exact path="/loginuser" component={LoginUser} />
                        <Route exact path="/loginprivilege" component={LoginPrivilege} />
                    </Switch>
                        <Route exact path="/buyticket" component={BuyTicket} />
                        <Route exact path="/homeuser" component={HomeUser} /> 
                        <Route exact path="/useroptions" component={UserOptions} />  
                 </BrowserRouter>
            </div>
        )
    }
}

export default App

