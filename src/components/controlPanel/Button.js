import styles from './Button.module.css'

function Button({text, side, turnPower, power, bank}){
    return(
        <div className={styles.mainContainer}>
            <span>{text}</span>
            <div onClick={turnPower || bank} className={styles.background}>
                <div className={`${styles.button} ${styles[side]} ${text === "Power" && !power ? (styles.powerOff):('')}`}></div>
            </div>
        </div>
    )
}

export default Button