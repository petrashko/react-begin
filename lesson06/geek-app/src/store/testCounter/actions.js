// /* eslint-disable */

export const inc = () => {
    return {
        type: 'INC'
    }
}

export const dec = () => {
    return {
        type: 'DEC'
    }
}

/*
export const rnd = (value) => {
    return {
        type: 'RND',
        payload: value
    }
}
*/

// Вожможно в результате подключения к store (Redux)
// middleware пакета ReduxThunk
export const rnd = (value) => (dispatch) => {
    // Вместо setTimeout можно выполнять запросы на сервер
    setTimeout(() => {
        dispatch({
            type: 'RND',
            payload: value
        });
    }, 100)
}
