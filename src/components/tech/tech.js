import { Fragment } from "react";
import styles from "./tech.module.css";
import html from "../../assests/tech/html.png";
import css from "../../assests/tech/css3.png";
import javasc from "../../assests/tech/javascript.png";
import react from "../../assests/tech/react.png";
import sass from "../../assests/tech/sass.png";
import regex from "../../assests/tech/regex.png";
import mui from "../../assests/tech/mui.png";
import redux from "../../assests/tech/redux.png";

import git from "../../assests/tech/tools/git.png";
import vvs from "../../assests/tech/tools/vs.png";
import ts from "../../assests/tech/type.png";
import next from "../../assests/tech/next.png";
export function Tech() {
    const tech = [html, css,sass, javasc,ts, react,redux,next,regex, mui];
    const tool=[vvs,git]
    return (
        <Fragment>
            <div className={styles.techBox}>
                <h2>My <span className={styles.spe}>Technical </span>Skills</h2>
                <div className={styles.techTopDiv}>
                    {
                        tech.map((e, i) =>
                            <div key={i*10}className={styles.waterDiv}>
                                <img alt="loading" src={e} className={styles.techLogooo} />
                            </div>

                        )
                    }
                    
                </div>
                <h2>My <span className={styles.spe}>Tools</span></h2>
                <div className={styles.techbottomDiv}>
                {
                        tool.map((e, i) =>
                            <div key={i*10}className={styles.waterDiv}>
                                <img alt="loading" src={e} className={styles.techLogooo} />
                            </div>

                        )
                    }


                </div>


            </div>
        </Fragment>
    )
}