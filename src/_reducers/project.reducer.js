import { ADD_PROJECT } from '../_constants'


const Projects = [
    {
        name: 'ТЕРАПЕВТИЧЕСКИЙ КОРПУС',
        duration: '08.04.2019-31.01.21 гг.',
        leader: 'Денис Конев',
        admin: 'Гросолим Лимитед'
    }
] 
const projects = (state = Projects, {id, name, duration, leader, admin, type}) => {
    switch(type) {
        case ADD_PROJECT : 
        return [
            ...state, {
                name,
                duration,
                leader,
                admin
            }
        ]
        default: 
            return state; 
    }
}

export default projects
