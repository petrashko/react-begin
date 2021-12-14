// /* eslint-disable */

import { useSelector, useDispatch } from 'react-redux';
//
import { getCount } from '../../store/testCounter/selectors.js';
import { inc, dec, rnd } from '../../store/testCounter/actions.js';


// eslint-disable-next-line
const TestReduxPage = () => {
    //
    const count = useSelector(getCount);
    //
    const dispatch = useDispatch();

    const onClickRnd = () => {
        const rndValue = Math.floor(Math.random() * 10);
        dispatch( rnd(rndValue) );
    }

    //
    return (
        <div className="jumbotron">
            <h1>{count}</h1>
            <button
                className="btn btn-primary"
                onClick={(ev) => dispatch( dec() )}
            >
                DEC
            </button>
            <button
                className="btn btn-primary"
                onClick={(ev) => dispatch( inc() )}
            >
                INC
            </button>
            <button
                className="btn btn-primary"
                onClick={(ev) => onClickRnd()}
            >
                RND
            </button>
        </div>
    );
}

export { TestReduxPage };
