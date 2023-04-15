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
                            src= {"./icons/Home.jpg"}
                            width={55}
                            height={55}
                        />
                    </Link>
                    <Link href={"/Help"}>
                        <Image
                            className={styles.icon}
                            src={"./icons/Help.jpg"}
                            width={50}
                            height={50}
                        />
                    </Link>
                    <Link href={"/Music"}>
                        <Image
                            className={styles.icon}
                            src={"./icons/Music.jpg"}
                            width={50}
                            height={50}
                        />
                    </Link>
                    <Link href={"/Profile"}>
                        <Image
                            className={styles.icon}
                            src={"./icons/Profile.jpg"}
                            width={50}
                            height={50}
                        />
                    </Link>
                </div>
                <div className={styles.base}>
                </div>
            </div>
        </>
    )
}