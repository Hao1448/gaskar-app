import React from 'react'
import './CardProject.scss'

export const CardProject = () => {
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
                    <div className="bottom-title">Терапевтический корпус</div>
                    <div className="bottom-row">08.04.2019-31.01.21 гг.</div>
                    <div className="bottom-row">Денис Конев</div>
                    <div className="bottom-row">Гросолим Лимитед</div>
                </div>
            </div>
        </div>
    )
}