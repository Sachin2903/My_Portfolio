import { Fragment, useState } from "react";
import styles from "./project.module.css";
import { SubProject } from "./subProject";
import { useSelector,useDispatch } from "react-redux";
import {BsArrowDownSquareFill,BsFillArrowUpSquareFill} from "react-icons/bs"
import { projectSlice } from "../../redux/slice/projectSlice";
import desi from "../../assests/image/dd.png";

export function Project(){
    const [toogle,setToogle]=useState(false)
  const styleArray=[true,false,true,false,true,false]
    const disDis=useDispatch();
  
    const Array=useSelector((state,action)=>{
        return state.project;
    })
    function loadMoreFun(){
        disDis(projectSlice.actions.seemore(toogle));
        setToogle(!toogle);
    }
   
    return(
        <Fragment>
            <div id="project" className={styles.projectsec}>
                <img className={styles.desiLogo} alt="Loading" src={desi}/>
              <p  className={styles.propp} >MY WORK</p>
              <h1 className={styles.prohh}>Projects.</h1>
              <p className={styles.proppp}>Each project is a real-world example of my skills and expertise, providing a glimpse into my capabilities as a software developer. You'll find brief project descriptions, links to the code repositories, and live demos that showcase my ability to work with various technologies</p>
               {
                Array.map((e,i)=><SubProject tog={styleArray[i]} data={e} key={i*10}/>)
               }
               <div onClick={loadMoreFun}className={styles.seeMore}>
               <h4 className={styles.seeMoreText}>{toogle?"See Less":"See More"} </h4>
               {
                toogle?<BsFillArrowUpSquareFill className={styles.seeMoreLogo}/>:<BsArrowDownSquareFill className={styles.seeMoreLogo}/>

               }
               
               </div>
               
            </div>
        </Fragment>
    )
}
