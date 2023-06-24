import {v4 as uuid} from "uuid";
import p1   from "../img/pro1/pro1.png";
import p1e  from "../img/pro1/proextra (1).png";
import p1e2 from "../img/pro1/proextra (2).png";
import p1e3 from "../img/pro1/proextra (3).png";

import p2 from "../img/pro2/pro2.png";
import p2e1 from "../img/pro2/expro (1).png";
import p2e2 from "../img/pro2/expro (2).png";

import p3 from "../img/pro3/pr03.png";
import p3e1 from "../img/pro3/pro3ex (1).png";
import p3e2 from "../img/pro3/pro3ex (2).png";
import p3e3 from "../img/pro3/pro3ex (3).png";

import p4 from "../img/p4/p4main.png";
import p4e1 from "../img/p4/p4ex (1).png";
import p4e2 from "../img/p4/p4ex (2).png";
import p4e3 from "../img/p4/p4ex (3).png";

import p5 from "../img/p5/p5.png";
import p5e1 from "../img/p5/p5extra (1).png";
import p5e2 from "../img/p5/p5extra (2).png";
import p5e3 from "../img/p5/p5extra (3).png";

import p6 from "../img/p6/p6.png";
import p6e1 from "../img/p6/p6extra.png";
import p6e2 from "../img/p6/p6extra (1).png";
import p6e3 from "../img/p6/p6extra (2).png";



export const data=[{
    id:uuid(),
    topic:"Car Rental",
    detail:"A Frontend Project(using React) also added functionality for user interaction.The Car Rental website provides an interface that allows users to rent cars for personal and business use ",
    mainsrc:p1,
    minsrc:[p1e,p1e2,p1e3],
    src1:p1e,
    src2:p1e2,
    src3:p1e3,
    srcArray:[true,true,true], 
    live:"https://car-rental-apni-car-samgho.netlify.app/",
    git:"https://github.com/Sachin2903/Car-Rental_Using_React.git"
},
{
    id:uuid(),
    topic:"Scrap Bazar",
    detail:"A Frontend Project(using React). Scrap Bazar website provides an interface that allows users to earn money in the exchange of scrap at best prices ",
    mainsrc:p2,
    minsrc:[p2,p2e1,p2e2],
    src1:p2,
    src2:p2e1,
    src3:p2e2,
    srcArray:[true,true,true], 
    live:"https://scrap-bazar-by-sachin-chaturvedi.netlify.app/",
    git:"https://github.com/Sachin2903/Scrap_Bazar_React_Project"
},
{
    id:uuid(),
    topic:"Kanban Board",
    detail:"A Frontend Project(using React) The Kanban board website provides an interface that allows users to make notes in the form of list and as well as sublist and also can trask this list or task ",
    mainsrc:p3,
    minsrc:[p3e1,p3e2,p3e3],
    src1:p3e1,
    src2:p3e2,
    src3:p3e3,
    srcArray:[true,true,true], 
    live:"https://kanban-board-group-01.netlify.app/",
    git:"https://github.com/Sachin2903/Kanban_Board_clone.git"
},
{
    id:uuid(),
    topic:"Happy Holiday",
    detail:"A Frontend Project(using React). Happy Holiday is a tour and travel website that provides consultancy service and offer various holiday package across India",
    mainsrc:p4,
    minsrc:[p4e1,p4e2,p4e3],
    src1:p4e1,
    src2:p4e2,
    src3:p4e3,
    srcArray:[true,true,true], 
    live:"https://car-rental-apni-car-samgho.netlify.app/",
    git:"https://github.com/Sachin2903/Car-Rental_Using_React.git"
},
{
    id:uuid(),
    topic:"Twitter Clone",
    detail:"A Frontend Project(using React) also added similar functionality for user interaction.User have to create account and then login with its own id and can tweet as well as follow unfollow others ",
    mainsrc:p5,
    minsrc:[p5e1,p5e2,p5e3],
    src1:p5e1,
    src2:p5e2,
    src3:p5e3,
    srcArray:[true,true,true], 
    live:"https://649747973a5864123e82c3bf--gentle-brioche-3ccebc.netlify.app/",
    git:"https://github.com/Sachin2903/Twitter_clone"
},
{
    id:uuid(),
    topic:"Google Docs Clone",
    detail:"A Frontend Project(using React) also added some functionality that a google docs have like changing fontsize,adding image make text bold ,italic etc ",
    mainsrc:p6,
    minsrc:[p6e1,p6e2,p6e3],
    src1:p6e1,
    src2:p6e2,
    src3:p6e3,
    srcArray:[true,true,true], 
    live:"https://google-docs-clone-sachin.netlify.app/",
    git:"https://github.com/Sachin2903/Google_Docs_Clone"
},
]