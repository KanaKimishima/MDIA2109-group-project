import Image from "next/image";
import styles from './styles.module.css'
import Link from "next/link";
export default function Logo () {
    return (
        <>
        <Image className={styles.logo} src='/logo/Logo_Min_Sizing-2.png'
        width={296}
        height={287} ></Image>
        </>
    )
}