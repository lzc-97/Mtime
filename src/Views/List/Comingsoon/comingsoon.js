import React, { Component } from 'react'

export default class Comingsoon extends Component {
    state = {
        datalist:[33333333333333333333]
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
