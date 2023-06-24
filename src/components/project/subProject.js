import { Fragment } from "react";
import styles from "./subProject.module.css";
import { useDispatch } from "react-redux";
import { projectSlice } from "../../redux/slice/projectSlice";
import {AiFillGithub,AiFillEye} from "react-icons/ai"
export function SubProject({tog,data}) {
    const dis=useDispatch();
     function changeMain(e){
   dis(projectSlice.actions.changeMainImg({i:data.id,iTo:e}))
     }

    return (
        <Fragment>
            <div className={tog?styles.minProject:styles.minProjectfalse}>
                <div className={styles.projectRight}>
                    <img alt="loading" src={data.mainsrc} className={styles.Img} />

                    <div className={styles.extraImg}>
                    <img onClick={()=>changeMain(0)} alt="loading" src={data.src1}className={data.srcArray[0]?styles.extraImgBottom:`${styles.extraImgBottom} ${styles.extraImgBottomFalse}`}/>
                    <img onClick={()=>changeMain(1)}alt="loading" src={data.src2}className={data.srcArray[1]?styles.extraImgBottom:`${styles.extraImgBottom} ${styles.extraImgBottomFalse}`}/>
                    <img onClick={()=>changeMain(2)}alt="loading" src={data.src3}className={data.srcArray[2]?styles.extraImgBottom:`${styles.extraImgBottom} ${styles.extraImgBottomFalse}`}/>
                    </div>

                </div>
                <div className={styles.projectLeft}>
                   <h3 className={styles.headbottom}>{data.topic}</h3>
                    <p className={styles.textbottom}>{data.detail}</p>
                    <div className={styles.logo}>
                    <a href={data.live} rel="noreferrer"  target="_blank"><AiFillEye/></a>
                    <a href={data.git}  rel="noreferrer" target="_blank"><AiFillGithub/></a>
                    </div>

                </div>
            </div>
        </Fragment>
    )

}