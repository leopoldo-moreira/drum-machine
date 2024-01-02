import styles from './VolumeBar.module.css'

function VolumeBar({changeVolume, power}){    

    return (
        <div className={styles.bar}>
            <input {...(power ? {} : {disabled: true}) } onChange={changeVolume} max="1" min="0" step="0.01" type="range" defaultValue=".5"/>
        </div>
    )
}

export default VolumeBar