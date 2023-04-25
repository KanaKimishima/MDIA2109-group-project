import Link from "next/link";
import Image from "next/image";
import styles from './NextButton.module.css'

import { useState } from "react";

export default function Next() {
    return(
        <>
         <button className={styles.next} >
      <Image src='/icons/Next_button.png'
            width={50}
            height={50} />
      </button>
        </>
    )
}