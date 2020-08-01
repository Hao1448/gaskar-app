import React, { Fragment } from 'react'
import './UiInput.scss'


export const UiInput = ({value}) => {
    return (
        <Fragment>
            <div className="title">{value}</div>
            <input className="input" placeholder={value}/>
        </Fragment>
    )
}
