import { ADD_PROJECT } from '../_constants'

export const addProject = ({name, duration, leader, admin, id}) => ({
    type: ADD_PROJECT,
    id,
    name,
    duration,
    leader,
    admin
});