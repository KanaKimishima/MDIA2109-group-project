import styles from 'components/SettingsButton/SettingsButton.module.css'
import Image from "next/image";
export default function SettingsButton(){
    return(
        <>
        <button className={styles.button}> 
            <Image src="/icons/SettingButton.png" 
            width={32}
            height={28}/>
        </button>
        </>
    )
}