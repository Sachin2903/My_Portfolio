import { Fragment, useRef } from "react";
import styles from "./last.module.css";
export function Last() {
  const input1=useRef("")
const input2=useRef("")
const input3=useRef("")
const input4=useRef("")
const ptag=useRef("");
const pleaseTag=useRef("")

function deleteInputFun(){
    if(input1.current.value.length>0&&input2.current.value.length>0&&input3.current.value.length>0&&input4.current.value.length>0){
        ptag.current.style.display="block"
        setTimeout(()=>{
            ptag.current.style.display="none"
        },3000)
        input1.current.value=""
    input2.current.value=""
    input3.current.value=""
    input4.current.value=""
    }else{
        pleaseTag.current.style.display="block";
        setTimeout(()=>{
            pleaseTag.current.style.display="none"
        },3000)


    }
    

}


    return (
        <Fragment>
            <div className={styles.connectMain}>
                <h2 id="contact">Let's <span className={styles.connectTopText}>Connect</span> With <span className={styles.connectTopText}>Me</span></h2>

                <div  className={styles.socialDiv}>
                    <a rel="noreferrer" className={styles.link} href="https://www.linkedin.com/in/sachin-chaturvedi-403255225" target="_blank">LinkedIn</a>
                    <a rel="noreferrer" className={styles.git} href="https://github.com/Sachin2903" target="_blank">Github</a>

                </div>
                <div className={styles.bottomBox}>

                    <span>
                        <input ref={input1}  className={styles.inputName} placeholder="Name" type="text"/>
                        <input ref={input2}  className={styles.inputNumber} placeholder="Mobile Number" type="number"/>
                    </span>
                    <input ref={input3} className={styles.inputEmail} placeholder="Email" type="text" />
                    <textarea ref={input4} spellCheck={false} className={styles.textarae} placeholder="Message"/>
                   
                    <button onClick={deleteInputFun}className={styles.btn}>Send Message</button>
                     
                    <p className={styles.ptext}ref={ptag}>Message Successfully Send</p>
                    <p ref={pleaseTag}className={styles.pleasetext}>Please Check Detailsa Once</p>
                </div>
            </div>
        </Fragment>
    )
}