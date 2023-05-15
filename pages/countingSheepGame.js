import Head from "next/head";
import { useState } from "react";
import styles from '@/styles/CountingSheep.module.css'
import Image from "next/image";
import StartCountingButton from "@/components/StartCountingButton";
import NavBar from "@/components/NavBar";

export default function CountingSheep () {
    return(
        <>
        <div className={styles.main_content}>
        <Image src="/graphics/Sheepy.png"
        width={146}
        height={177}/>
        <StartCountingButton/>
        </div>
            <NavBar/>
            </>


    )
}