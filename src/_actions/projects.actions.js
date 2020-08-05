import { ADD_PROJECT } from '../_constants'

export const addProject = ({name, duration, leader, admin}) => ({
    type: ADD_PROJECT,
    name,
    duration,
    leader,
    admin
});