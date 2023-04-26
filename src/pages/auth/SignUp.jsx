import React, { useState } from 'react'
import { ReactComponent as SignupImage } from '../../Icons/SignUpImage.svg'
import './style.css'
import './responsive.css'
import { ReactComponent as ClosedEye } from '../../Icons/ClosedEye.svg'
import { ReactComponent as OpenEye } from '../../Icons/OpenEye.svg'
import { Link } from 'react-router-dom'
import { ReactComponent as GoogleIcon } from '../../Icons/GoogleIcon.svg'
import Modal from 'react-bootstrap/Modal';



const SignUp = () => {

    // States
    const [passwordVisible, setPasswordVisible] = useState({
        password1: false,
        password2: false,
    });
    const [modalShow, setModalShow] = React.useState(false);

 
    const [signupSection, setSignupSection] = useState(true);
    // End


    // Toggle password visibility
    const togglePasswordVisibility = (passwordName) => {
        setPasswordVisible({
            ...passwordVisible,
            [passwordName]: !passwordVisible[passwordName],
        });
    };
    // End

    // OTP modal
    const MyVerticallyCenteredModal = (props) => {
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='text-center'>

                    <p className='modalText'>
                        We have sent OTPs to your registered email address and phone number. Please enter the OTPs in their respective fields.
                    </p>
                    <button className='btnDark' onClick={props.onHide}>Okay</button>
                </Modal.Body>

            </Modal>
        );
    }
    // End

    // Handle asection Hide/Show
 

    // End
    return (
        <div className='authContainer'>
            <div className='loginLeftDetails'>
                <SignupImage />
            </div>
            <div className='loginRightDetails'>
                {signupSection ? (
                    <>
                        <h1 className='loginTitle'>
                            <span>Sign Up</span>
                        </h1>
                        <div className='padding20'></div>
                        <form id='loginForm'>
                            <p className='authFormLabel'>
                                Name
                            </p>
                            <input type='text' placeholder='Name' />
                            <div className='padding16'></div>
                            <p className='authFormLabel'>
                                Email Address
                            </p>
                            <input type='email' placeholder='Email Address' />
                            <div className='padding16'></div>
                            <p className='authFormLabel'>
                                Phone Number
                            </p>
                            <input type='text' placeholder='Phone Number' />
                            <div className='padding16'></div>
                            <div className='formFieldGroup'>
                                <div className='formFieldGroupFlex'>
                                    <p className='authFormLabel'>
                                        Password
                                    </p>
                                    <input
                                        type={passwordVisible.password1 ? 'text' : 'password'}
                                        placeholder='Password'
                                    />
                                    <span className="eyeIcon" onClick={() => togglePasswordVisibility('password1')}>
                                        {passwordVisible.password1 ? <OpenEye /> : <ClosedEye />}
                                    </span>
                                </div>
                                <div className='formFieldGroupFlex'>
                                    <p className='authFormLabel'>
                                        Confirm Password
                                    </p>
                                    <input
                                        type={passwordVisible.password2 ? 'text' : 'password'}
                                        placeholder='Confirm Password'
                                    />
                                    <span className="eyeIcon" onClick={() => togglePasswordVisibility('password2')}>
                                        {passwordVisible.password2 ? <OpenEye /> : <ClosedEye />}
                                    </span>
                                </div>
                            </div>
                            {/* <div className='authTwoCol'>
                            <div className='d-flex align-items-center'><input type='checkbox' /><label>Remember Me</label></div>
                            <Link><p className='forgetPassword'>Forgot Password?</p></Link>
                        </div> */}
                            <div className='authBtnGroup'>
                                <button className='btnDark width-100' onClick={() => setModalShow(true)} type='button'>Submit</button>
                                <button className='whiteShadeBtn width-100'><GoogleIcon className='googleIcon' />Sign Up with Google</button>
                            </div>
                        </form>
                        <p className='authDesc'>
                        Already have an account? &nbsp;
                            <Link className='forgetPassword' to='/login'>Login</Link>
                        </p>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            onClick={()=>{
                                setSignupSection(false)
                            }}
                        />
                    </>
                ) : (
                    <>
                        <h1 className='loginTitle'>
                            <span>Ver</span>ify your Email & Phone
                        </h1>
                        <div className='padding20'></div>
                        <form id='loginForm'>

                            <p className='authFormLabel'>
                                Email Address
                            </p>
                            <input type='email' placeholder='Email Address' />
                            <div className='padding16'></div>
                            <p className='authFormLabel'>
                                Email OTP
                            </p>
                            <input type='text' placeholder='Email OTP' />
                            <div className='padding16'></div>
                            <p className='authFormLabel'>
                                Phone Number
                            </p>
                            <input type='text' placeholder='Phone Number' />
                            <div className='padding16'></div>
                            <p className='authFormLabel'>
                                Phone Number OTP
                            </p>
                            <input type='text' placeholder='Phone Number OTP' />
                            <div className='padding16'></div>
                            <button className='btnDark width-100'>Verify</button>

                        </form>
                        <p className='authDesc'>

                            <Link className='forgetPassword' onClick={() => { setSignupSection(true)}}
                            >Back</Link>
                        </p>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </>

                )}
              
               
            </div>
        </div>
    )
}

export default SignUp