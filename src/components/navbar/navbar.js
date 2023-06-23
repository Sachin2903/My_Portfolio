import React, { Fragment ,useState} from "react";
import styles from "./navbar.module.css";
import {RxCross2} from "react-icons/rx";
import {AiOutlineMenu} from "react-icons/ai"

export function Navbar(){
    const [toggle,setToogle]=useState(true);
    return(
        <Fragment>
            <div id="home" className={styles.navbarBox}>
            <p  className={styles.navtext}>Sachin  Chaturvedi</p>
            <ul className={toggle?styles.navlist:`${styles.navlist} ${styles.listActive}`} >
                <li><a href="#home">Home</a></li>
                <li><a href="#home">About</a></li>
                <li><a href="#home">Projects</a></li>
                <li><a href="#home">Contact</a></li>
            </ul>
            {
                toggle?<AiOutlineMenu onClick={()=>setToogle(!toggle)} className={styles.menu}/>:<RxCross2 onClick={()=>setToogle(!toggle)} className={styles.menu}/>
            }
            
            </div>
            
        </Fragment>
    )
}





