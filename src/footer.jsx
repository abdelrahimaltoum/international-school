import { Call, Email, Facebook, Home, Instagram, Message, YouTube } from "@mui/icons-material";
import "./footer.css";
import { Link } from "react-router-dom";


function Footer(){
    return(
        <div className="footer">
            <div className="footer-logo">
                <img className="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_design-images/gisc-logo-mod-svg.svg?h=74&w=284&hash=995B7E73A62070684B9EB07F249284D6"/>
            </div>
            <div className="footer-colomn">
                <h3>Get connected</h3>
           <div className="footer-icons">     <Facebook/> <Instagram/> <YouTube/></div>
                <img src="https://www.gis-cairo.com/-/media/project/gems/shared/gems-education-logo_v_01-svg-2.svg?h=100&w=161&hash=DAE113B37ABA9C950E829F35E3F100FF"/>
            </div>
            <div className="footer-colomn">
                <h3>About us</h3>
               <Link to="/our-school"> Our School</Link>
               <Link to="/message-from-the-head">Welcome Message from the Principal</Link>
               <Link to="/our-team">Our Team</Link>
               <Link to="/campus-and-location">Campus and Location</Link>
               <Link to="/health-and-safety">Health and Safety</Link>
            </div>
            <div className="footer-colomn">
                <h3>Why GISC?</h3>
                <a>Enabling Learning Environment</a>
                <a>Accreditations</a>
                <a>Technology for the Future</a>
                <a>A Values-Driven Community</a>
                <a>Excellence at GISC</a>
            </div>
            <div className="footer-colomn">
            <h3>Admissions</h3>
                <Link to="/how-to-apply">How to apply</Link>
                <a>Tuition fees</a>
                <a>online payment</a>
                <a>contact us</a>
            </div>
            <div className="footer-colomn">
                <h3>GEMS International School Cairo</h3>
               
         <span>      <Home/> <a>Al Rehab Extension, Zone 8, New Cairo, Egypt</a></span>


<span><Email/><a>registrar_gic@gemsedu.com</a></span>

<span><Call/><a>+002 01061618302 or +002 01061618103</a></span>
            </div>
           

        </div>
    )
}
export default Footer;