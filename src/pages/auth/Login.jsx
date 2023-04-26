import React, { useState } from 'react'
import { ReactComponent as LoginImage } from '../../Icons/LoginImages.svg'
import './style.css'
import './responsive.css'
import { ReactComponent as ClosedEye } from '../../Icons/ClosedEye.svg'
import { ReactComponent as OpenEye } from '../../Icons/OpenEye.svg'
import { Link } from 'react-router-dom'
import { ReactComponent as GoogleIcon } from '../../Icons/GoogleIcon.svg'
import axios from "axios";
import { useDispatch, connect } from 'react-redux';
import CryptoJS from 'crypto-js';
import { login } from '../../store/slices/UserSlice'
import { useNavigate, useLocation, Navigate  } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Login = () => {
   const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: '',
    });
    const loggedIn = useSelector(state => state.users.isLoggedIn);
   
    const [error, setError] = useState('');
    const [loginSection, setLoginSection] = useState(true);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const basePath = process.env.REACT_APP_API_PATH;
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {

        event.preventDefault();
        try {
            const response = await axios.post(
                `${basePath}/api/login`,
                userDetails,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        // add any additional headers here
                    },
                }
            );
            const token = response.data.token;

            // store in localStorage so we can get it back and set in resux store again.
            const SecretKey = process.env.REACT_APP_SECRETE_KEY;
            const encryptedToken = CryptoJS.AES.encrypt(token, SecretKey).toString();
            localStorage.setItem('token', encryptedToken);
            navigate(-1);
            dispatch(login({ token }));
            setError('');
           
        } catch (error) {
            setError('Invalid email or password');
        }
    };




    return (
        <>
        {loggedIn === true ? (
           <Navigate to='/'/>
        ):(

            <div className='authContainer'>
                <div className='loginLeftDetails'>
                    <LoginImage />
                </div>
                <div className='loginRightDetails'>
                    {loginSection ? (
                        <>
                            <h1 className='loginTitle'>
                                <span>Login</span>
                            </h1>
                            <div className='padding20'></div>
                            <p className='errorMessage'>
                                {
                                    error
                                }
                            </p>
                            <form id='loginForm'>
                                <p className='authFormLabel'>
                                    Email Address
                                </p>
                                <input name='email' value={userDetails.email} type='email' placeholder='Email Address' onChange={handleChange} />
                                <div className='padding16'></div>
                                <p className='authFormLabel'>
                                    Password
                                </p>
                                <input
                                    name='password'
                                    type={passwordVisible ? 'text' : 'password'}
                                    placeholder='Password'
                                    onChange={handleChange}
                                    value={userDetails.password}
                                />
                                <span className="eyeIcon" onClick={togglePasswordVisibility}>
                                    {passwordVisible ? <OpenEye /> : <ClosedEye />}
                                </span>
                                <div className='authTwoCol'>
                                    <div className='d-flex align-items-center'><input type='checkbox' /><label>Remember Me</label></div>
                                    <p className='forgetPassword' onClick={() => { setLoginSection(false) }}>Forgot Password?</p>
                                </div>
                                <div className='authBtnGroup'>
                                    <button className='btnDark width-100' onClick={handleSubmit}>Login</button>
                                    <button className='whiteShadeBtn width-100'><GoogleIcon className='googleIcon' />Continue with Google</button>
                                </div>
                            </form>
                            <p className='authDesc'>
                                Don’t have an account? &nbsp;
                                <Link className='forgetPassword' to='/sign-up'>Sign up for free</Link>
                            </p>
                        </>
                    ) : (
                        <>
                            <h1 className='loginTitle'>
                                <span>For</span>got Password
                            </h1>
                            <p className='forgotDesc'>
                                To reset your password, please enter your registered email address.
                                You will recieve a link to create a new password.
                            </p>
                            <div className='padding20'></div>

                            <form id='loginForm'>
                                <p className='authFormLabel'>
                                    Email Address
                                </p>
                                <input name='email' value={userDetails.email} type='email' placeholder='Email Address' onChange={handleChange} />


                                <div className='authBtnGroup'>
                                    <button className='btnDark width-100' onClick={handleSubmit}>Send Reset Link</button>
                                    <button className='whiteShadeBtn width-100' onClick={() => { setLoginSection(true) }}>Login</button>
                                </div>
                            </form>

                        </>
                    )}

                </div>
            </div>
        )}
        </>
    )
}

export default connect(null, { login })(Login);
