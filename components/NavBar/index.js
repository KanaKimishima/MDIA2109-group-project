import Image from 'next/image'
import Link from 'next/link';
import styles from './NavBar.module.css'

export default function NavBar() {

    return (
        <>
            <div className={styles.main}>
                <div className={styles.icons}>
                    <Link href={"/"}>
                        <Image
                            className={styles.icon}
                            src= {"/icons/Home.png"}
                            width={64.49}
                            height={82}
                        />
                    </Link>
                    <Link href={"/Help"}>
                        <Image
                            className={styles.icon}
                            src={"/icons/Help.png"}
                            width={54.09}
                            height={77}
                        />
                    </Link>
                    <Link href={"/Music"}>
                        <Image
                            className={styles.icon}
                            src={"/icons/Music.png"}
                            width={48.6}
                            height={77}
                        />
                    </Link>
                    <Link href={"/Profile"}>
                        <Image
                            className={styles.icon}
                            src={"/icons/Profile.png"}
                            width={61.17}
                            height={78}
                        />
                    </Link>
                </div>
                <div className={styles.base}>
                </div>
            </div>
        </>
    )
}