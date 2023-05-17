import React, { useEffect ,useState, useRef } from "react";
import PauseButton from "../PauseButton";
import Link from "next/link";
import Image from "next/image";
import PlayButton from "../PlayButton";
import styles from './ThirdAudioPlayer.module.css'
import Previous from "../PreviousButton";
import NextButton from "../NextButton";
export default function ThirdAudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef();
    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration)
        setDuration(seconds);
        progressBar.current.max = seconds;

    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])
    const durationTime = (secs) => {
        const minutes = Math.floor(secs/60);
        const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}` ;
        const seconds = Math.floor(secs % 60);
        const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return  `${returnMinutes} : ${returnSeconds}`;
    }
    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        
        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)

        }
        else{
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
        
    }
    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
     changePlayerCurrentTime();
     animationRef.current = requestAnimationFrame(whilePlaying);
    }
    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
       changePlayerCurrentTime();
    }
    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value)
    }
  
return(
    <>
    <div className={styles.mainContent}>
    <div className={styles.audioPlayer}>
    <audio ref={audioPlayer} src="/audio/Beach.mp3" preload="metadata" ></audio>
    <div className={styles.time_tracker}>
    <div className={styles.durations}>
    <div className={styles.end_time}>{durationTime (currentTime)}</div>
    <div className={styles.duration}>{(duration && !isNaN(duration)) && durationTime(duration)}</div>
    </div>
    <div>
        <input className={styles.progressBar} type="range" defaultValue="0" ref={progressBar} onChange={changeRange}/>
    </div>
    </div>
    <div className={styles.buttonRow}>
        <Link href='/rainNoiseSound'>
    <Previous/>
    </Link>
    <button className={styles.play_pause_button} onClick={togglePlayPause}>
        {isPlaying ? <PauseButton/> : <PlayButton/> }
       
    </button>
    <Link href='/natureNoiseSound'>
    <NextButton/>
    </Link>
    </div>
    
    </div>
    </div>
    </>
)
    }