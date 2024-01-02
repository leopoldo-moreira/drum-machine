import Button from './Button'
import styles from './ControlPanel.module.css'
import Display from './Display'
import VolumeBar from './VolumeBar'

function ControlPanel({displayText, turnPower, power, changeVolume, bank, bankSide}){
    return(
        <div className={styles.controlPanel}>
            <Button turnPower={turnPower} text="Power" side={power ? 'right' : 'left'} power={power}/>
            <Display displayText={displayText}/>  
            <VolumeBar power={power} changeVolume={changeVolume}/>    
            <Button text="Bank" side={bankSide === 1 ? 'right': 'left'} bank={bank}/>      
        </div>
    )
}

export default ControlPanel