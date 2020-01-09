import React, { Component } from 'react'

export default class Nowplaying extends Component {
    state = {
        datalist:[11111111]
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

    handleClick = (id)=>{
        this.props.history.push(`/detail/${id}`)
    }
}
