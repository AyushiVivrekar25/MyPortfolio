import "./Intro.scss"
import  ExpandMoreIcon  from '@material-ui/icons/ExpandMore';
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
     const textRef = useRef();
    
     useEffect(() => {
         init(textRef.current, {
             showCursor: true,
             backkDelay: 1500,
             backSpeed:60,
             strings: [ "Developer" ]
         });
        
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="wrapper">
                    <h2>Hi, I'm</h2>
                    <h1>Ayushi Vivrekar</h1>
                    <h3>Software <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <ExpandMoreIcon className="icon"/>
                </a>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <img src="assests/Ayushi.jpg" alt="ayushi img"/>

                </div>
            </div>
            
        </div>
    )
}
