import React, { Fragment } from 'react'
import './UiInput.scss'


export const UiInput = ({value, type, onChange, name, placeholder}) => {
    return (
        <Fragment>
            <div className="title">{placeholder}</div>
            <input className="input" placeholder={placeholder} onChange={onChange} type={type} name={name}/>
        </Fragment>
    )
}
