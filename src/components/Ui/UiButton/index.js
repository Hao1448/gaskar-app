import React from 'react'
import './UiButton.scss'


export const UiButton = ({value}) => {
    return (
        <button className="button">{value}</button>
    )
}
