import styles from './PadContainer.module.css'
import Pad from './Pad'

function PadContainer({keyPressed, url, power, keyPress, volume}){    

    const pads = ['Q','W','E','A','S','D','Z','X','C'] 
    
    function isThis (item, props){ 
        if(keyPressed === item.toLowerCase() && props === 'url'){return url}
        if(keyPressed === item.toLowerCase() && props === 'key'){return true}
    }

    return(
        <div className={styles.padContainer}>

            {pads.map((item,index) =>
                <Pad volume={volume} keyPress={keyPress} power={power} url={isThis(item, 'url')} key={index} text={item} isPressed={isThis(item, 'key')}/>
            )}
            
        </div>
    )
}

export default PadContainer