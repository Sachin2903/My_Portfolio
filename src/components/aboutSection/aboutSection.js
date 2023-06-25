import { Fragment } from "react"
import styles from "./aboutSection.module.css"

export function AboutSection(){
    return(
        <Fragment>
            <div id="about"className={styles.aboutBox}>
                <h1 className={styles.aboutText}>About <span>Me</span></h1>
                <div className={styles.aboutInner}>
                   <p className={styles.innerText}>Hi! I am Sachin Chaturvedi, A Frontend Developer focused on crafting great web experiences.Designing and Coding have been my passion since the day I started working with computers but I found myself into Web Design/Development.I enjoy creating beautifully designed and functional websites.</p>
                   <p className={styles.innerText}> I'm a passionate Developer with strong administrative & communication skills, good attention to detail & the ability to write efficent code</p>
                   
                </div> 

            </div>

        </Fragment>
    )
}