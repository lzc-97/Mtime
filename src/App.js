import React, { Component } from 'react'
import Tabbar from './Components/Tabbar/tabbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Tabbar/>
        {this.props.children}
      </div>
    )
  }
}
