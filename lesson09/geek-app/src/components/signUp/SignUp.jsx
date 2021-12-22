import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
//
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//
import { AuthForm } from '../authForm/AuthForm.jsx';
import { setAuthUser } from '../../store/user/actions.js';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //
    const location = useLocation();

    const fromPage = location.state?.from?.pathname || '/';

    const handleRegister = (email, password) => {
        const auth = getAuth();
     
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setAuthUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate(fromPage, {replace: true});
            })
            .catch(err => console.log(err));
    }

    return (
        <AuthForm
            title="register"
            handleClick={handleRegister}
        />
    )
}

export {SignUp};
