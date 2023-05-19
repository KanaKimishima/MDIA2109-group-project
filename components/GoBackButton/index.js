import styles from './GoBackButton.module.css'
import Image from 'next/image'
export default function GoBackButton () {
    return(
    <>
     <Image src='/icons/BackButton.png'
        width={100}
        height={100}/>
    </>
    )
}