import Link from "next/link";
import Image from "next/image";
import styles from './PreviousButton.module.css'
import { useState } from "react";

export default function Previous() {
    return(
        <>
         <button className={styles.previous} href='/'>
      <Image src='/icons/Previous_button.png'
            width={50}
            height={50} />
      </button>
        </>
    )
}