import {
    HashRouter,
    Route,
    Redirect,
    Switch
}from 'react-router-dom'
import App from '../App'
import React from 'react'
import Home from '../Views/Home/home'
import Center from '../Views/Center/center'
import Film from '../Views/Film/film'
import List from '../Views/List/list'
import Detail from '../Views/Detail/detail'
import City from '../Views/City/city'
import Theater from '../Views/Theater/theater'
import Login from '../Views/Login/login'

const router = (
    <HashRouter>
        <App>
            <Switch>
                <Route path="/list" render={()=>
                    <List>
                    </List>
                }/>
                <Route path="/home" component={Home}/>
                <Route path="/film" component={Film}/>
                <Route path="/login" component={Login}/>
                <Route path="/center" render={()=>
                    localStorage.getItem("token")?<center></center>:<Redirect to="/login"/>
                }/>
                <Route path="/list/:myid" component={List}/>
                <Route path="/detail/:myid" component={Detail} exact/>
                <Route path="/city/:myid" component={City}/>
                <Route path="/theater/:myid" component={Theater} exact/>
                <Redirect from="/" to="/home" exact/>
                <Redirect to="/404"/>
            </Switch>
        </App>
    </HashRouter>
)

export default router