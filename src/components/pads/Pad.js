import styles from './Pad.module.css'
import { useRef } from 'react'

function Pad({power, text, isPressed, url, keyPress, volume}){

    const audioRef = useRef(null);

    if (audioRef.current) {
        audioRef.current.volume = volume;
      }
    
    
    return(
        <div onClick={keyPress} className={`${power ? (styles.padOn):(styles.padOff)} ${isPressed && power ? (styles.active) : (isPressed && !power ? (styles.powerOff): ('') )}`}>
            <span>{text}</span>
            <audio ref={audioRef} autoPlay src={url}></audio>            
        </div>
    )
}

export default Pad