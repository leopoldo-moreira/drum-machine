import styles from './Display.module.css'

function Display({displayText}){
    return(
        <p className={styles.display}>{displayText}</p>
    )
}

export default Display