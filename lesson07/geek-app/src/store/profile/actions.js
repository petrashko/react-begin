// /* eslint-disable */

export const IS_SHOW_NAME = 'PROFILE::IS_SHOW_NAME';
export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';

export const showName = (isShow) => {
    return {
        type: IS_SHOW_NAME,
        payload: isShow
    }
}

export const changeName = (name) => { 
    return {
        type: CHANGE_NAME,
        payload: name
    }
}
