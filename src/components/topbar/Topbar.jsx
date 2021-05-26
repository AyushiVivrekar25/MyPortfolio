import "./Topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
            <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
                <div className="left">
                    <a href="#intro" className="logo"> 
                    <img src="assests/logo.jpg"/> </a>
                    <div className="itemContainer"> 
                    <Person className="icon"/>
                    <span>+91 782 878 2136</span>
                    </div>
                    <div className="itemContainer"> 
                    <Mail className="icon"/>
                    <span> ayushi.vivarekar@gmail.com</span>
                     </div>
                    </div>
               
            
            </div>
        </div>
    )
}
