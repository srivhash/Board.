import styles from "./SignIn2.module.css";
import React, { useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import { useGoogleLogin, GoogleLogin } from "@react-oauth/google";

const SignIn2 = () => {
    //define email variable with use state
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const SubmissionHandler = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)

        //axios post request to validate user
        //if it passes => .then 
        navigate("/home")
    }

    const clientId = '931820784096-1p1lambf3rai7l6fk9vo7abrflh2l2uf.apps.googleusercontent.com';
    const onSuccess = (response) => {
        console.log('Logged in successfully!', response);
        navigate("/home")
        // perform additional actions on success
    };
    const onFailure = (error) => {
        console.log('Error logging in:', error);
        // handle error cases
    };

    const signIn  = useGoogleLogin({
        clientId,
        onSuccess,
        onFailure,
    });

    const handleGoogleSignIn = () => {
        if (signIn) {
            signIn();
        }
        else {
            console.log("error")
        }
    };
    const handleRegister = (e) => {
        e.preventDefault()

        // should navigate to a registration page
        navigate("/")
    }
    return (
        // <div className={styles.signIn}>
        <>
            <div className={styles.leftSide}>
                <b className={styles.board}>Board.</b>
            </div>

            <div className={styles.rightSide}>

                <b className={styles.signIn2}>Sign In</b>
                <div className={styles.signInTo}>Sign in to your account</div>

                <button className={styles.button} onClick={handleGoogleSignIn}>
                    {/* <div className={styles.white}>
                        <div className={styles.button} />
                    </div> */}
                    <img className={styles.googleLogo} src="https://www.google.com/images/icons/gplus-64.png" alt="Google logo" />
                    <div className={styles.signInWith}>Sign in with Google</div>
                    {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
                    {/* <img className={styles.googleIcon1} alt="" src="../src/google.svg" /> */}
                </button>

                <button className={styles.button}>
                    {/* <div className={styles.white}>
                        <div className={styles.button} />
                    </div> */}
                    <img className={styles.appleLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png" alt="Apple logo" />
                    <div className={styles.signInWith}>Sign in with Apple</div>
                    {/* <img className={styles.googleIcon1} alt="" src="../src/google.svg" /> */}
                </button>

                <div className={styles.card}>
                    <form className={styles.loginForm} onSubmit={SubmissionHandler}>

                        <b className={styles.formFields}>Email address</b>
                        <br />
                        {/* <input className={styles.button3} type="text" onChange={(e) => setEmail(e.target.value)} /> */}
                        <input className={styles.button3} type="text" placeholder="johndoe@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
                        <br />

                        <b className={styles.formFields}>Password</b>
                        <br />
                        <input className={styles.button3} type="password" onChange={(e) => setPassword(e.target.value)} />
                        <br />

                        <b className={styles.blueFields}> Forgot Password?</b>
                        <br />

                        <button className={styles.button2}>
                            <b className={styles.signIn1}>Sign In</b>
                        </button>

                    </form>
                </div>
                <div className={styles.dontHaveAnContainer}>
                    <span className={styles.dontHaveAn}>{`Don't have an account? `}</span>
                    <span className={styles.registerHere} onClick={handleRegister}>Register here</span>
                </div>
            </div>
        </>
    );
};
export { SignIn2 };
