import React from 'react'
import { ProfileImage } from '../ProfileImage'
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
                    <div className="bottom-row">
                        <div className="bottom-title">{project.name}</div>
                        <div className="bottom-item">{project.duration}</div>
                        <div className="bottom-item">{project.leader}</div>
                        <div className="bottom-item">{project.admin}</div>
                    </div>
                    <div className="bottom-row bottom-flex">
                        <div className="bottom-persons">
                            <div className="bottom-person">
                                <ProfileImage/>
                            </div>
                            <div className="bottom-person">
                                <ProfileImage/>
                            </div>
                            <div className="bottom-person">
                                <ProfileImage/>
                            </div>
                            <div className="bottom-person">
                                <ProfileImage/>
                            </div>
                        </div>
                        <div className="bottom-round"/>
                    </div>
                </div>
            </div>
        </div>
    )
}