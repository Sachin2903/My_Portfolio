import React, { Fragment } from "react";
import logo from "../../assests/image/ass.gif"
import styles from "./heroPage.module.css";
import html from "../../assests/tech/html.png";
import css from "../../assests/tech/css3.png";
import javasc from "../../assests/tech/javascript.png";
import react from "../../assests/tech/react.png";
import sass from "../../assests/tech/sass.png";

import mui from "../../assests/tech/mui.png";



export function HeroPage() {
    return (
        <Fragment>
            <div className={styles.heroPageBox}>
                <div className={styles.innerDiv}>
                    <div className={styles.heroLeft}>
                        <h2 className={styles.leftHeading}>Front-End <span className={styles.reactName}>React</span>Developer</h2>
                       <span>

                       </span>
                       <button>Download Resume</button>
                    </div>
                    <img alt="loading" className={styles.heroImg} slt="loading" src={logo} />
                    <div className={styles.techStach}>
                        <p className={styles.techText}>Tech Stack</p>
                        <img alt="loading" src={html} className={styles.techLogo} />
                        <img alt="loading" src={css} className={styles.techLogo} />
                        <img alt="loading" src={javasc} className={styles.techLogo} />
                        <img alt="loading" src={sass} className={styles.techLogo} />
                        <img alt="loading" src={react} className={styles.techLogo} />
                        <img alt="loading" src={mui} className={styles.techLogo} />
                    </div>
                </div>


            </div>

        </Fragment>
    )
}