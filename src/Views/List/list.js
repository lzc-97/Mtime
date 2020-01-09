import React, { Component } from 'react'
import {
    Route,
    Redirect,
    Switch
}from 'react-router-dom'
import Nowplaying from './Nowplaying/nowplaying'
import Comingsoon from './Comingsoon/comingsoon'

export default class List extends Component {
    render() {
        return (
            <div>
                列表页
                <Switch>
                    <Route path="/list/nowplaying" component={Nowplaying}/>
                    <Route path="/list/comingsoon" component={Comingsoon}/>
                    <Redirect from="/list" to="/list/nowplaying" exact/>
                </Switch>  
            </div>
        )
    }
}
