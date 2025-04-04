import { Link } from "react-router-dom";
import "./nextSteps.css";
 function NextSteps(){
    return(
        <div className="next-steps">
            <h2> Next Steps </h2>
            <div className="next-steps-items">
         <Link to="/admissions">   <div className="next-steps-item">
                <img src="https://www.gis-cairo.com/-/media/project/gems/global/gems/cta-buttons-option-1/book-icon.svg"/>
                <h3>Admissions</h3>
            </div></Link>
            <Link to="/campus-and-location">
            <div className="next-steps-item">
                <img src="https://www.gis-cairo.com/-/media/project/gems/global/gems/cta-buttons-option-1/student.svg"/>
                <h3>Location</h3>
            </div></Link>
            </div>
        </div>
    )
 }
 export default NextSteps;