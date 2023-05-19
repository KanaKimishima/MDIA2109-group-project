import Head from "next/head";
import Link from "next/link";
import styles from 'styles/StartYoga.module.css'
import StartYogaButton from "@/components/StartYogaButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "@/components/NavBar";
import GoBackButton from "@/components/GoBackButton";

import React from "react";
import {Container} from 'react-bootstrap'


export default function startYogaPage() {
    return(
        <>
        <div className={styles.mainContent}>
            <div className={styles.topBar}>
        <Link href='/mainContent'>
                <GoBackButton/>
                </Link>
        <h1 className={styles.pageTitle}> Yoga</h1>
        </div>
        <Container>
        <div className={styles.ratio_ratio_16x9}>
        <iframe src="https://www.youtube.com/embed/2WE-L8iyu0U" title="YouTube video" allowFullScreen></iframe>
        </div>
        </Container>
        <NavBar/>
        </div>
        
 </>
    )
}