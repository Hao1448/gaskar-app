import React from 'react'
import { UiButton } from '../Ui'
import { CardProject } from '../CardProject'

import './WidgetProjects.scss'

export const WidgetProjects = () => {
    return (
        <div className="widgetProjects">
            <div className="widgetProjects-top">
                <div className="widgetProjects-title">список проектов</div>
                <div className="widgetProjects-button">
                    <UiButton value="Добавить проект"/>
                </div>
            </div>
            <div className="widgetProjects-cards">
                <div className="widgetProjects-cards_card">
                    <CardProject/>
                </div>
            </div>
        </div>
    )
}