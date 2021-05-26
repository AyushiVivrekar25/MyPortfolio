import React from 'react'
import Education from './Education';
import Slide from 'react-reveal/Slide';
import './About.scss'


function About() {

  
function ImageSection() {

   
    return (
        <div className="ImageSection">
           
                <p className="about-text">
                The person which are having positive attitude , hard working , well beheviour , strong will power <br/>
                and as a team member in Volly Boll and House Caption in school defines me best best leadership quality. <br/>
                That'me, My name is Ayushi Vivrekar. I graduated my Belchore of engineering in Computer Science branch <br/>
                from Swami Vivekananda College of Engineering on Aug 2020.And from September 2020, <br/>
                I had started my internship as a Software Developer Intern at Sysmetis IT Solution in which, <br/>
                I have learnt web development and basic concept of React.
                
                </p>
                 {/* <div className="about-details">
                    <div className="left-section">
                        <p>Birthday</p>
                        <p>Highest Qualification</p>
                        <p>Languages</p>
                        <p>Phone</p>
                        <p>Email</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: 25/01/1998</p>
                        <p>: Bachelor of Engineering</p>
                        <p>: English, Hindi,Marathi</p>
                        <p>: 7828782136</p>
                        <p>: ayushi.vivarekar@gmail.com</p>
                        <p>: 5/2 Krishna Pura Tilakpath,near Rajwada Indore(MP)</p> 
                        </div>
                    </div>
                </div>
           

            <div className="skill"> */}
            </div>
    
    )
}
        

    return (
        <div className="about" id="about">

        <div className="AboutPage">
            <h1>About</h1>
            <Slide left>
            <div className="aboutsection">
            <ImageSection className="details"/>
            <Education/>
            </div>
            </Slide>
            

        </div>
        </div>
    )
}

export default About;