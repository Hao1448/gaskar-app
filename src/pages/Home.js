import React from 'react'
import { UiInput }  from '../components/Ui'
import { UiButton }  from '../components/Ui'
import '../index.scss'

export const Home = () => {
    return (
        <div className="home">
            <div className="col">
                <div className="home_input">
                    <UiInput value="Логин"/>
                </div>
                <div className="home_input">
                    <UiInput value="Пароль"/>
                </div>
                <div>
                    <input type="checkbox" id="scales" name="scales"/>
                    <label forHtml="scales">Запомнить пароль</label>
                </div>
                <UiButton value="Войти"/>
                <div>Забыли пароль?</div>
            </div>
        </div>
    )
}
