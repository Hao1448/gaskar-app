import React from 'react'
import {  NavLink } from 'react-router-dom';
import './NavMenu.scss'

const NavMenu = () => {
    return (
        <div className='navMenu'>
            <NavLink to="/tasks" style={{ textDecoration: 'none' }} activeClassName='navMenu-item_active' className="navMenu-item"> 
                <div className="navMenu-item_icon"/>
                Задачи и работы
                <div className="navMenu-item_num">3</div>
            </NavLink>
            <NavLink to="/projects" style={{ textDecoration: 'none' }} activeClassName='navMenu-item_active' className="navMenu-item">
                <div className="navMenu-item_icon"/>
                Проекты
            </NavLink>
            <NavLink to="/calendar" style={{ textDecoration: 'none' }} activeClassName='navMenu-item_active' className="navMenu-item">
                <div className="navMenu-item_icon"/>
                Календарь
            </NavLink>
            <NavLink to="/opportunities" style={{ textDecoration: 'none' }} activeClassName='navMenu-item_active' className="navMenu-item">
                <div className="navMenu-item_icon"/>
                Возможности
            </NavLink>
        </div>
    )
}
export default NavMenu