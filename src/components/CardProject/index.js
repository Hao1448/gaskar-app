import React from 'react'
import './CardProject.scss'

export const CardProject = ({project}) => {
    return (
        <div className="card">
            <div className="grid">
                <div className="top">
                    <div className="top-row">
                        <div className="card-branch">Медицина</div>
                        <div className="card-status">Строится</div>
                    </div>
                    <div className="top-title">Hedassah Medical</div>
                </div>
                <div className="bottom">
                    <div className="bottom-title">{project.name}</div>
                    <div className="bottom-row">{project.duration}</div>
                    <div className="bottom-row">{project.leader}</div>
                    <div className="bottom-row">{project.admin}</div>
                </div>
            </div>
        </div>
    )
}