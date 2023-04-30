import styles from 'components/SoundButton/SoundButton.module.css'
import Image from 'next/image'
export default function Sound() {
    return(
        <>
        <div >
        <button className={styles.sound_button}>
            <p className={styles.button_name}>Sounds</p>
        <Image className={styles.sounds_icon} src="/icons/SoundsIcon.png" 
        width={56}
        height={47}/>

        </button>
        </div>
        
        </>
    )
}