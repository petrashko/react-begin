// /* eslint-disable */

export const showName = (isShow) => {
    return {
        type: 'IS_SHOW_NAME',
        payload: isShow
    }
}

export const changeName = (name) => { 
    return {
        type: 'CHANGE_NAME',
        payload: name
    }
}
