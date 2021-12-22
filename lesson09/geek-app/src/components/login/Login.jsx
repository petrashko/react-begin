import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
//
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//
import { AuthForm } from '../authForm/AuthForm.jsx';
import { setAuthUser } from '../../store/user/actions.js';

const Login = () => {
    const dispatch = useDispatch();
    //
    const navigate = useNavigate();
    //
    const location = useLocation();

    const fromPage = location.state?.from?.pathname || '/';
    
    const handleLogin = (email, password) => {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                //console.log(user);
                dispatch(setAuthUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate(fromPage, {replace: true});
            })
            .catch((err) => {
                console.log(err);
                alert('Invalid user!');
            });
    }

    return (
        <AuthForm
            title="sign in"
            handleClick={handleLogin}
        />
    )
}

export {Login};
