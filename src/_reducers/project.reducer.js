import { ADD_PROJECT } from '../_constants'


const Projects = [
    {
        id: 1,
        name: 'ТЕРАПЕВТИЧЕСКИЙ КОРПУС',
        duration: '08.04.2019-31.01.21 гг.',
        leader: 'Денис Конев',
        admin: 'Гросолим Лимитед'
    }
] 
const projects = (state = Projects, { name, duration, leader, admin, type, id}) => {
    switch(type) {
        case ADD_PROJECT : 
        return [
            ...state, {
                id,
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
