import React from 'react'
import './UiButton.scss'


export const UiButton = ({value, onClick}) => {
    return (
        <button className="button" onClick={onClick}>{value}</button>
    )
}
