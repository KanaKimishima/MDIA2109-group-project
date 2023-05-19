import Head from "next/head";
import NavBar from "@/components/NavBar";
import styles from '@/styles/ContactProfessional.module.css'
import Image from "next/image";

export default function ContactProffesional() {
    return(
        <>
        <div className={styles.mainContent}>
            <div className={styles.topBar}>
                <h1 className={styles.pageTitle}>
                    Contact Professional
                </h1>
            </div>
         <Image src="/images/ContactProfessional.png"
        width={399}
        height={248}/>
        <div className={styles.firstParagraph}>Don’t be afraid to ask for help. Talking to a professional about your problems and emotions is a big step towards improving your mental health. A professional such as psychologist will give you advices and options on how to improve your mental health based on the facts you provide them. </div>
        <div className={styles.secondParagraph}>
        Mental Health Helpline: You can call the Mental Health Helpline at 1-866-531-2600 to speak with a mental health professional who can provide you with support and connect you with local resources.
        </div>
        <div className={styles.thirdParagraph}>
        Crisis Services Canada: You can also call Crisis Services Canada at 1-833-456-4566 if you are in crisis or feeling depress. They offer support 24/7.

        </div>
        <div className={styles.fourthParagraph}>
        Remember that taking care of your own mental health is important too, so don't hesitate to reach out for support! 
        </div>
        <NavBar/>
        </div>
        </>

    )
}