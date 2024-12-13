import React, { useState } from 'react';
import styles from '../../assets/loginForm.module.css'
import LoginSetup from "./loginSetup"

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [showCard,setShowCard]= useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    setShowCard(!showCard)
    //login function
  };

  return (
    <div className={styles.container}>
      {!showCard?<div className={styles.formContainer}>
        {/* <img src="/logo.png" alt="Logo" className={styles.logo} /> */}
        <h2>Sign Up</h2>
        <p>We suggest using the email address you use at work.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit">Continue</button>
        </form>
        <div className={styles.orDivider}>
          <span>OR</span>
        </div>
        <div className={styles.socialButtons}>
          <button className={styles.googleBtn}>
            
            <img src="/google.png" alt="Google" /> Sign in with Google
          </button>
          <button className={styles.appleBtn} onClick={handleSubmit}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" /> Sign in with Apple
          </button>

       
        </div>
    
      </div> :<LoginSetup/> }
    </div>
  );
};

export default SignupForm;
