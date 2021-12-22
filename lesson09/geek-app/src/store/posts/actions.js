// /* eslint-disable */

export const POSTS_FETCHING = 'POSTS::FETCHING';
export const POSTS_FETCHED = 'POSTS::FETCHED';
export const POSTS_FETCHING_ERROR = 'POSTS::FETCHING_ERROR';

const postsFetching = () => {
    return {
        type: POSTS_FETCHING
    }
}

const postsFetched = (postList) => {
    return {
        type: POSTS_FETCHED,
        payload: postList
    }
}

const postsFetchingError = () => {
    return {
        type: POSTS_FETCHING_ERROR
    }
}

export const fetchPostList = (jsonRequest) => (dispatch) => {
    dispatch( postsFetching() );
    //
    jsonRequest("http://localhost:3030/posts")
        .then(data => {
            dispatch( postsFetched(data) );
        })
        .catch(() => {
            dispatch( postsFetchingError() )
        });
}
