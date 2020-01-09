import React, { Component } from 'react'

export default class Home extends Component {
    state = {
        datalist:[22222222222]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.datalist.map(item=>
                            <li key={item} onClick={()=>this.handleClick(item)}>{item}</li>
                        )
                    }
                </ul>
            </div>
        )
    }

    handleClick = ()=>{
        this.props.history.push(`/list/nowplaying`)
    }
    // handleClick = ()=>{
    //     this.props.history.push(`/citylist`)
    // }
}
