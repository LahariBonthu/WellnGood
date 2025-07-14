import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import googleIcon from '../assets/google-icon.svg';
import signInGoogle from '../auth/signInGoogle';
import api from '../api';

const Login = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
  const [signinData, setSigninData] = useState({ email: '', password: '' });

  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');

  const handleSignUp = () => {
    containerRef.current.classList.add(styles.rightPanelActive);
    setLoginError('');
    setSignupError('');
  };

  const handleSignIn = () => {
    containerRef.current.classList.remove(styles.rightPanelActive);
    setLoginError('');
    setSignupError('');
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setSignupError('');
    try {
      await api.post('/api/auth/signup', signupData);
      navigate('/dashboard');
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setSignupError('Email already exists');
      } else {
        setSignupError('Network error. Please try again later.');
      }
      console.error('Signup error:', err);
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      await api.post('/api/auth/login', signinData);
      navigate('/dashboard');
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setLoginError('Incorrect email or password');
      } else {
        setLoginError('Network error. Please try again later.');
      }
      console.error('Login error:', err);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={`${styles.container}`} ref={containerRef}>

        {/* Sign Up Form */}
        <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
          <form onSubmit={handleSignUpSubmit}>
            <h1>Create Account</h1>
            <div className={styles.socialContainer}>
              <button
                type="button"
                className={styles.googleButton}
                onClick={() => signInGoogle(navigate)}
              >
                <img src={googleIcon} alt="Google" className={styles.googleIcon} />
                Sign up with Google
              </button>
            </div>
            <span className={styles.orText}>or</span>

            <input
              type="text"
              placeholder="Name"
              value={signupData.name}
              onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={signupData.password}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
              required
            />
            {signupError && <p className={styles.errorMessage}>{signupError}</p>}
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className={`${styles.formContainer} ${styles.signInContainer}`}>
          <form onSubmit={handleSignInSubmit}>
            <h1>Sign in</h1>
            <div className={styles.socialContainer}>
              <button
                type="button"
                className={styles.googleButton}
                onClick={() => signInGoogle(navigate)}
              >
                <img src={googleIcon} alt="Google" className={styles.googleIcon} />
                Sign in with Google
              </button>
            </div>
            <span className={styles.orText}>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              value={signinData.email}
              onChange={(e) => setSigninData({ ...signinData, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={signinData.password}
              onChange={(e) => setSigninData({ ...signinData, password: e.target.value })}
              required
            />
            {loginError && <p className={styles.errorMessage}>{loginError}</p>}
            <a href="#" className={styles.forgot}>Forgot your password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>

        {/* Overlay */}
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
              <h1>Welcome Back!</h1>
              <p>To keep connected with us, please log in with your personal info</p>
              <button className={`${styles.ghost}`} onClick={handleSignIn}>Sign In</button>
            </div>
            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
              <h1>Hello, Friend!</h1>
              <p>Enter your details and start your journey with us</p>
              <button className={`${styles.ghost}`} onClick={handleSignUp}>Sign Up</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
