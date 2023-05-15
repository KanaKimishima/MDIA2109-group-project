import styles from '../styles/Tutorial.module.css'
import Link from 'next/link'
import React from 'react';
import { useState } from 'react';

export default function Tutorial() {

  const[popup, setPop] = useState(false);

  const handleClickOpen = () => {
    setPop(!popup);
  };

  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <div className={styles.body_main}>
    <main className={styles.main}>
    <div className={styles.main_image}>
             <h1 className={styles.terms_of_services}>Tutorial</h1>
              <div className={styles.popup_alert_inner_container}>
                <div  className={styles.popup_alert_inside_texts}>
                <h1 className={styles.popup_alert_lists}>Welcome to Pause, your favourite relaxation app</h1>
                <li className={styles.popup_alert_lists}>Start a session:</li>
                <li className={styles.popup_alert_lists}>Choose from a variety of guided question that will ask about yourself </li>
                <li className={styles.popup_alert_lists}>Select the one that speaks to you the most</li>
                <li className={styles.popup_alert_lists}>Once completed you should find your relaxation answer </li>
                <li className={styles.popup_alert_lists}>During a session:</li>
                <li className={styles.popup_alert_lists}>Take deep breaths to calm your mind and body</li>
                <li className={styles.popup_alert_lists}>End of session:</li>
                <li className={styles.popup_alert_lists}>App will signal when session is over</li>
                <li className={styles.popup_alert_lists}>You may continue to meditate on your own, or end the session and return to the home screen</li>
                <li className={styles.popup_alert_lists}>Other app features:</li>
                <li className={styles.popup_alert_lists}>"Settings" to customize audio and dark/ light mode which will be on your top right </li>
                <div className={styles.intro_button_container}>
              <label className={styles.accept_term_checkbox} onClick={() => setButtonClicked(true)}></label>
              <Link href="/Identify">
            {buttonClicked && <button className={styles.intro_button}>back</button>}
            </Link>
            </div>
              </div>
          </div>
        </div>
      </main>
      </div>
     
      )}