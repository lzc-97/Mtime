import React, { Component } from 'react'

export default class Film extends Component {
    state = {
        datalist:[88888]
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
        this.props.history.push(`/theater/${id}`)
    }
}
