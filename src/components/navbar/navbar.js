import React, { Fragment, useState } from "react";
import styles from "./navbar.module.css";
import { RxCross2 } from "react-icons/rx";
import {AiFillGithub,AiFillLinkedin,AiOutlineMenu} from "react-icons/ai"
export function Navbar() {
    const [toggle, setToogle] = useState(true);
    return (
        <Fragment>
            <div  className={styles.navbarBox}>
                <span className={styles.linkGit}>
                   <a rel="noreferrer" href="https://github.com/Sachin2903" target="_blank" className={styles.gitnav}><AiFillGithub /></a>
                   <a rel="noreferrer" href="https://www.linkedin.com/in/sachin-chaturvedi-403255225" target="_blank" ><AiFillLinkedin /></a>

                </span>
                <p className={styles.navtext}>Sachin  Chaturvedi</p>
                <ul className={toggle ? styles.navlist : `${styles.navlist} ${styles.listActive}`} >
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                {
                    toggle ? <AiOutlineMenu onClick={() => setToogle(!toggle)} className={styles.menu} /> : <RxCross2 onClick={() => setToogle(!toggle)} className={styles.menu} />
                }

            </div>

        </Fragment>
    )
}





