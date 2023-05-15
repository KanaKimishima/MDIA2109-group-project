import Link from "next/link";
import Head from "next/head";
import Sound1 from "@/components/NatureSound";
import styles from '@/styles/CalmingSounds.module.css'
import NavBar from "@/components/NavBar";
import NatureSound from "@/components/NatureSound";

export default function CalmingSounds() {
    return (
        <>
        <div className={styles.main_container}>Calming Sounds</div>
        <div className={styles.buttons}>
        <NatureSound/>
        </div>
    <NavBar/>
        
     
        
        </>
    )
}