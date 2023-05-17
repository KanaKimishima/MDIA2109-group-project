import styles from '@/styles/Tutorial.module.css'
import Link from 'next/link'
import React from 'react';
import { useState } from 'react';
import BackButton from '@/components/BackButton';

export default function Tutorial() {

  const[popup, setPop] = useState(false);

  const handleClickOpen = () => {
    setPop(!popup);
  };

  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <>
    
    <div className={styles.body_main}>
    <main className={styles.main}>
    <div className={styles.main_image}>
              <div className={styles.inner_container}>
                <BackButton/>
                <div  className={styles.inside_texts}>
                <h1 className={styles.lists}>Welcome to Pause, your favourite relaxation app</h1>
                <li className={styles.lists}>Start a session:</li>
                <li className={styles.lists}>Choose from a variety of guided question that will ask about yourself </li>
                <li className={styles.lists}>Select the one that speaks to you the most</li>
                <li className={styles.lists}>Once completed you should find your relaxation answer </li>
                <li className={styles.lists}>During a session:</li>
                <li className={styles.ists}>Take deep breaths to calm your mind and body</li>
                <li className={styles.lists}>End of session:</li>
                <li className={styles.lists}>App will signal when session is over</li>
                <li className={styles.lists}>You may continue to meditate on your own, or end the session and return to the home screen</li>
                <li className={styles.lists}>Other app features:</li>
                <li className={styles.lists}>"Settings" to have dark/ light mode which will be on your top left </li>
                
                <div className={styles.container}>
                

                
            </div>
            </div>
          </div>
        </div>
      </main>
      </div>
      </>
     
      )}