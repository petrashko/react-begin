// /* eslint-disable */

import { useEffect } from 'react';
//
import { useDispatch, useSelector } from 'react-redux';
//
import { Spinner, Button, ListGroup } from 'react-bootstrap';
//
import { useHttp } from '../../hooks/httpHook.js';
import { fetchPostList } from '../../store/posts/actions.js';

const PostListPage = () => {
    const postList = useSelector(state => state.posts.postList);
    //
    const loadingStatus = useSelector(state => state.posts.postsLoadingStatus);
    //
    const dispatch = useDispatch();
    //
    const {jsonRequest} = useHttp();

    //
    useEffect(
        () => {
            dispatch( fetchPostList(jsonRequest) );
        },
        // eslint-disable-next-line
        []
    );

    const onReload = () => {
        dispatch( fetchPostList(jsonRequest) );
    }

    const renderPosts = (arr) => {
        if (arr.length === 0) {
            return <ListGroup.Item>Posts not found</ListGroup.Item>;
        }

        return arr.map((item) => {
            return (
                <ListGroup.Item key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </ListGroup.Item>
            );
        })
    }

    //
    return (
        <div style={{margin: '1rem'}}>
            <p className="text-center">
                <Button
                    variant="secondary"
                    disabled={loadingStatus === 'loading'}
                    onClick={loadingStatus !== 'loading' ? onReload : null}
                >
                    Reload
                </Button>
            </p>
            <h2>Posts</h2>
            {
                loadingStatus === 'loading'
                    ? (
                        <h6 className="text-center mt-5">
                            <Spinner animation="border" variant="primary" />
                        </h6>
                    )
                    : null
            }
            {
                loadingStatus === 'error' ? <h5 className="text-center mt-5">Error loading</h5> : null
            }
            <ListGroup variant="flush">
                {
                    loadingStatus === 'idle' ? renderPosts(postList) : null
                }
            </ListGroup>
        </div>
    );
}

export { PostListPage };