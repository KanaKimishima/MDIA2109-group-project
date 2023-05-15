import Image from 'next/image'
import Link from 'next/link';
import styles from './NavBar.module.css'

export default function NavBar() {

    return (
        <>
            <div className={styles.main}>
                <div className={styles.icons}>
                    <Link href={"/mainContent"}>
                        <Image
                            className={styles.icon}
                            src= {"/icons/Home.png"}
                            width={64.49}
                            height={65}
                        />
                    </Link>
                    <Link href={"/contactProfessionalPeople"}>
                        <Image
                            className={styles.icon}
                            src={"/icons/Help.png"}
                            width={48.6}
                            height={52}
                        />
                    </Link>
                    <Link href={"/calmingNoiseSounds"}>
                        <Image
                            className={styles.icon}
                            src={"/icons/Music.png"}
                            width={60}
                            height={60}
                        />
                    </Link>
                    <Link href={"/profile"}>
                        <Image
                            className={styles.icon}
                            src={"/icons/Profile.png"}
                            width={50.47}
                            height={54}
                        />
                    </Link>
                </div>
               
            </div>
        </>
    )
}