import React from 'react'
import './About.scss'
export default function Education() {
    return (
        <div> 
    
          <div className="internship">
           <img src="/assests/internship.png" alt="internship" /><h2>Internship</h2>
          <ul>
                <li>
                    <h4> Sysmetis IT solution </h4>
                   <p>Software developer Intern | Sept 2020 - Apr 2021 </p> 
                </li>

             <li>
                    <h5>Project Undertaken </h5>
                  <h3>JUNO Application (01/2021 - 04/2021) </h3> 
                   <p>It is an Augmented Reality based project, in which we have to mark spatial anchor for saving the position of the data.
                     In which, I worked here as a web developer and basics sketches of Reactjs and Redux. 
                     Website link :- https://junowebapp.z29.web.core.windows.net/login </p>
                   <h3>SAM Application (11/2020 - 01/2021) </h3>
                     
 
                    <p> Sysmetis Assets Management(SAM) project based on storing any type of 3D models, audio files, images etc. into a database. 
                        In this project anyone can download the assets. I worked on this project as a Web Developer. </p>
                </li> 
            </ul>
          </div>
          
            <div className="education">
            <h2>Education History</h2>
            <ul>
               <li>
                <h4> Swami Vivekanand college of Engineering, Indore, MP</h4>
                   <p> Bachelor of Engineering ( CS) | 08/2016- 08/ 2020 GRADUATE WITH 6.9 CGPA </p>

                {/* <p> Swami Vivekanand College Of Engineering <br/>CGPA : 7.8 </p> */}
               </li>
               <li>
                <h4>Bal Niketan H.S School, Indore, MP</h4>
                <p>Senior Secondary (12th) | 06/2015- 03/ 2016 
                <br/> Completed my Senior Secondary School 
                 with an aggregate of 5.6%</p>
               </li>
               <li>
                <h4>Bal Niketan H.S School, Indore, MP </h4>
                <p> Secondary School (10th) | 06/2013- 03/ 2014 
                 <br/>Completed my Secondary School with an aggregate of 7.5% </p>
               </li>
            </ul>
            </div>
        </div>
    )
}

