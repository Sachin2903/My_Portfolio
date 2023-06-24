import { Fragment } from "react";
import styles from "./project.module.css";
export function Project(){
    return(
        <Fragment>
            <div className={styles.projectsec}>
              <p >MY WORK</p>
              <h1>Projects.</h1>
              <p>Each project is a real-world example of my skills and expertise, providing a glimpse into my capabilities as a software developer. You'll find brief project descriptions, links to the code repositories, and live demos that showcase my ability to work with various technologies</p>
            </div>
        </Fragment>
    )
}
