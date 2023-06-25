import React, { Fragment } from "react";
import logo from "../../assests/image/ass.gif"
import styles from "./heroPage.module.css";
import html from "../../assests/tech/html.png";
import css from "../../assests/tech/css3.png";
import javasc from "../../assests/tech/javascript.png";
import react from "../../assests/tech/react.png";
import sass from "../../assests/tech/sass.png";
import regex from "../../assests/tech/regex.png";

import b from "../../assests/design/b.png";

import resumePDF from '../../assests/design/resume.pdf';


import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";



export function HeroPage() {
    const array=["Engineer ","Front-End Developer ","Front-End React Developer "];
    const [aniText,setAniText]=useState("Hello");
  const count=useRef(0);
  const len=useRef(0);

     useEffect(()=>{
        const id=setTimeout(()=>{
              if(len.current>(array[count.current].length)){
              
                    len.current=0;
                count.current=(count.current+1)%(array.length);
            }
            setAniText(array[count.current].slice(0,len.current))
            len.current=len.current+1;
             return ()=>clearTimeout(id)

        },700)
     },)

     function handleDownloadResume() {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'Sachin_Chaturvedi_Resume.pdf';
        link.click();
      }


    return (
        <Fragment>
            <div id="home" className={styles.heroPageBox}>
                <img src={b}alt="loading" className={styles.heroPageDesign}/>
                <div className={styles.innerDiv}>
                    <div className={styles.heroLeft}>
                        <h2 className={styles.stateText}>{aniText}<p className={styles.line}></p></h2>
                        <h3 className={styles.leftHeading}>I bring <span className={styles.reactName}> ideas</span> to web.</h3>
                      
                       <button onClick={handleDownloadResume} className={styles.downloadbtn}>Download Resume</button>
                    </div>
                    <img alt="loading" className={styles.heroImg} slt="loading" src={logo} />
                    <div className={styles.techStach}>
                        <p className={styles.techText}>Tech Stack</p>
                        <img alt="loading" src={html} className={styles.techLogo} />
                        <img alt="loading" src={css} className={styles.techLogo} />
                        <img alt="loading" src={javasc} className={styles.techLogo} />
                        <img alt="loading" src={sass} className={styles.techLogo} />
                        <img alt="loading" src={react} className={styles.techLogo} />
                        <img alt="loading" src={regex} className={styles.techLogo} />
                    </div>
                </div>


            </div>

        </Fragment>
    )
}