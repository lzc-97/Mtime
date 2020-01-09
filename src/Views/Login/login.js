import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                登录
                <button onClick={()=>{
                    localStorage.setItem("token","sdsgdrvfvr")
                }}>点击</button>
            </div>
        )
    }
}
