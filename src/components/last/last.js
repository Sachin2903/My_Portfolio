import { Fragment } from "react";
import styles from "./last.module.css";
export function Last() {
    return (
        <Fragment>
            <div className={styles.connectMain}>
                <h2>Let's <span className={styles.connectTopText}>Connect</span> With <span className={styles.connectTopText}>Me</span></h2>

                <div className={styles.socialDiv}>
                    <a className={styles.link} href="https://www.linkedin.com/in/sachin-chaturvedi-403255225" target="_blank">LinkedIn</a>
                    <a className={styles.git} href="https://github.com/Sachin2903" target="_blank">Github</a>

                </div>
                <div className={styles.bottomBox}>

                    <span>
                        <input className={styles.inputName} placeholder="Name" type="text"/>
                        <input className={styles.inputNumber} placeholder="Mobile Number" type="number"/>
                    </span>
                    <input className={styles.inputEmail} placeholder="Email" type="text" />
                    <textarea placeholder="Message"/>
                    <button>Send Message</button>



                </div>
            </div>
        </Fragment>
    )
}