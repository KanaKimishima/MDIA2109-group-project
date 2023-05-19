import Link from "next/link";
import Head from "next/head";
import Sound1 from "@/components/NatureSound";
import styles from '@/styles/CalmingSounds.module.css'
import NavBar from "@/components/NavBar";
import NatureSound from "@/components/NatureSound";
import GoBackButton from "@/components/GoBackButton";

export default function CalmingSounds() {
    return (
        <>
        <div className={styles.mainContainer}>
        <div className={styles.main_container}>
            <div className={styles.topBar}>
                <Link href='/mainContent'>
                <GoBackButton/>
                </Link>
            <h1 className={styles.pageTitle}>Calming Sounds</h1></div>
            
            </div>
        <div className={styles.buttons}>
        <NatureSound/>
        </div>
    <NavBar/>
    </div>
        
     
        
        </>
    )
}