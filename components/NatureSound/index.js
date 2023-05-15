import Image from "next/image";
import styles from 'components/NatureSound/Nature.module.css'
import Link from "next/link";
export default function NatureSound() {
    return(
        <>
        <div className={styles.main_content}>
            <Link href='/natureNoiseSound'>
            <button className={styles.first_container}>
               <p className={styles.title_one}>Nature</p> 
                <Image className={styles.icon} src='/icons/Nature_sound.png'
                width={40}
                height={40}/>
            </button>
            </Link>
            <Link href='/rainNoiseSound'>
        <button className={styles.second_container}>
        <p className={styles.title_two}>Rain</p> 
        <Image className={styles.icon_two} src='/icons/Rain_icon.png'
                width={40}
                height={40}/>
        </button>
        </Link>
        <Link href='/brownNoiseSound'>
        <button className={styles.third_container}>
        <p className={styles.title_three}>Brown noise</p> 
        <Image className={styles.icon_three} src='/icons/Brown_noise.png'
                width={40}
                height={40}/>
        </button>
        </Link>
        </div>

        </>
    )
}
