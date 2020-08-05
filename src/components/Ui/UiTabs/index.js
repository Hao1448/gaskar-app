import React from 'react'
import './UiTabs.scss'

export const UiTabs = () => {
    return (
        <div className="tabs">
            <div className="tabs-items">
                <div className="tabs-items_item active">список проектов</div>
                <div className="tabs-items_item">дорожные карты</div>
            </div>
        </div>
    )
}
