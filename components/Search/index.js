import Image from "next/image";
import styles from 'components/Search/Search.module.css'

export default function Search() {
    return(
        <>
        <div className={styles.search_container}>
            <Image className={styles.search_icon} src='/icons/Icon.png'
            width={19}
            height={20}/>
            <input className={styles.inpur_container} placeholder="Search Content"/>
        </div>
        </>
    )
}