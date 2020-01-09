import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './tabbar.module.scss'
export default class Tabbar extends Component {
    render() {
        return (
            <nav>
                <ul className={style.out}>
                    <li><img src="logo_mtime.png"/></li>
                    <li><NavLink to="/home" activeClassName={style.active}>首页</NavLink></li>
                    <li><NavLink to="/film" activeClassName={style.active}>影院</NavLink></li>
                    <li><NavLink to="/center" activeClassName={style.active}>个人</NavLink></li>
                </ul>
            </nav>
        )
    }
}
