
import { actionTypes } from './actionTypes';

export const setAdminAction = (admin) => {
    const {SET_ADMIN} = actionTypes().admin

    return {
        type: SET_ADMIN,
        payload: {admin}
    }
}