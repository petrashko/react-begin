// /* eslint-disable */

export const SET_AUTH_USER = 'USER::SET_AUTH_USER';
export const REMOVE_AUTH_USER = 'USER::REMOVE_AUTH_USER';

export const setAuthUser = (authUser) => {
    return {
        type: SET_AUTH_USER,
        payload: {
            token: authUser.token,
            email: authUser.email,
            id: authUser.id
        }
    }
}

export const removeAuthUser = () => { 
    return {
        type: REMOVE_AUTH_USER
    }
}
