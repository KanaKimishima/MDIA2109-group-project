import Link from "next/link";
import Head from "next/head";
import Sound1 from "@/components/NatureSound";
import styles from '@/styles/CalmingSounds.module.css'
import NavBar from "@/components/NavBar";
import NatureSound from "@/components/NatureSound";

export default function CalmingSounds() {
    return (
        <>
        <div className={styles.mainContainer}>
        <div className={styles.main_container}>
            <h1 className={styles.pageTitle}>Calming Sounds</h1></div>
        <div className={styles.buttons}>
        <NatureSound/>
        </div>
    <NavBar/>
    </div>
        
     
        
        </>
    )
}