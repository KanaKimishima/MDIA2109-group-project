import Link from "next/link";
import Head from "next/head";
import Sound1 from "@/components/NatureSound";
import styles from '@/styles/Calming_sounds.module.css'
import NavBar from "@/components/NavBar";

export default function Calming_Sounds() {
    return (
        <>
        <div className={styles.main_container}>Calming Sounds</div>
        <div className={styles.buttons}>
        <Sound1/>
        </div>
    <NavBar/>
        
     
        
        </>
    )
}