import {  CallOutlined, EmailOutlined, Facebook, Instagram, LocationOnOutlined, YouTube } from "@mui/icons-material";
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
               <Link to="/vacancies">Vacancies</Link>
               <Link to="/The-GEMS-Difference">The GEM Diffrenece</Link>
             
            </div>
            <div className="footer-colomn">
                <h3>Why GISC?</h3>
                <Link to="/Enabling-learning-enviroment">Enabling Learning Environment</Link>
                <Link to="/accreditations">Accreditations</Link>
                <Link to="/educational-experts">Educational Experts</Link>
                <Link to="/a-value-driven-community">A Values-Driven Community</Link>
               <Link to="/Technology-for-the-Future">Technology for the future</Link> 
                 <Link to="/excellence-at-GISC">Excellence at GISC</Link>
            </div>
            <div className="footer-colomn">
            <h3>Admissions</h3>
                <Link to="/how-to-apply">How to apply</Link>
                <Link to="/online-payment">online payment</Link>
                <Link to="/contact-us">contact us</Link>
            </div>
            <div className="footer-colomn">
                <h3>GEMS International School Cairo</h3>
               
     <Link to="/campus-and-location" >  <span><LocationOnOutlined/> Al Rehab Extension, Zone 8, New Cairo, Egypt</span></Link> 


<Link to="/contact-us"><span><EmailOutlined/>registrar_gic@gemsedu.com</span></Link>


<Link to="/">      <span><CallOutlined/>+002 01061618302 or +002 01061618103</span> </Link>
            </div>
           

        </div>
    )
}
export default Footer;