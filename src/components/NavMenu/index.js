import React from 'react'
import './NavMenu.scss'

const NavMenu = () => {
    return (
        <div className='navMenu'>
            <div className='navMenu_item'>
                <div className="navMenu_item-icon"/>
                Задачи и работы
                <div className="navMenu_item-num">3</div>
            </div>
            <div className='navMenu_item'>
                <div className="navMenu_item-icon"/>
                Проекты
            </div>
            <div className='navMenu_item'>
                <div className="navMenu_item-icon"/>
                Календарь
            </div>
            <div className='navMenu_item'>
                <div className="navMenu_item-icon"/>
                Возможности
            </div>
        </div>
    )
}
export default NavMenu