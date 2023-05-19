import Head from "next/head";
import { useState } from "react";
import styles from '@/styles/CountingSheep.module.css'
import Image from "next/image";
import StartCountingButton from "@/components/StartCountingButton";
import NavBar from "@/components/NavBar";
import GoBackButton from "@/components/GoBackButton";
import Link from "next/link";

export default function CountingSheep () {
    return(
        <>
        <div className={styles.mainContainer}>
        <div className={styles.main_content}>
            <div className={styles.topBar}>
            <Link href='/betterSleepPage'>
                <GoBackButton/>
                </Link>
                <h1 className={styles.pageTitle}>
                    Counting Sheep
                </h1>
            </div>
            <div className={styles.imageContainer}>
        <Image className={styles.sheepImage} src="/graphics/Sheepy.png"
        width={146}
        height={177}/>
        </div>
        <StartCountingButton/>
        </div>
            <NavBar/>
            </div>
            </>


    )
}