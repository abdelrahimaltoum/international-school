import { Button } from "@mui/material";
import "./welcome.css";
import { Link } from "react-router-dom";
function Welcome(){
return(
    <div className="welcome">
        <div className="welcome-left">
            <span className="hc">"WE SEE GENIUS IN EVERY CHILD"</span>
            <p className="pc">We are narturing an ecosystem and infrastructure to draw out potential , and training educators by the best to the best.</p>
         <Link to="/apply">  <Button variant="contained">Apply Now</Button></Link> 
        </div>
        <div className="welcome-right">
            <img src="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/gisc-banner/website-04-new.png?h=3267&w=3297&hash=5B2ADA8472C68FEC9E46C6F482F619C5"/>
            </div>

    </div>
)
}
export default Welcome;