import React from 'react';
import styles from '../../assets/loginForm.module.css'

const loginSetup = () => {
  


  return (
    // <div className={styles.container}>
      <div className={styles.card}>
        <h2>Let’s get you setup.</h2>
        <p className={styles.subtitle}>Setup your dashboard in three quick and easy steps.</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.number}>1</div>
            Setup your dashboard
          </li>
          <li className={styles.listItem}>
            <div className={styles.number}>2</div>
            Connect your apps
          </li>
          <li className={styles.listItem}>
            <div className={styles.number}>3</div>
            Get clarity on your business
          </li>
        </ul>
        <button className={styles.button}>Continue</button>
      </div>
    // </div>
  );
};

export default loginSetup;
