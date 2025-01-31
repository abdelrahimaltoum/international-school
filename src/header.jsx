import { Link } from "react-router-dom";
import "./header.css"
import AboutUs from "./aboutUs";
function Header () {
    return (
        <div className="header">

        <div className="header-left">
        <Link to="/" >  <img src="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_design-images/gisc-logo-mod-svg.svg?h=74&w=284&hash=995B7E73A62070684B9EB07F249284D6"/></Link> 

        </div>
        <div className="header-right">
           <Link to="/about"> <p>About Us</p></Link>
        <Link to="/whyGISC">   <p>Why GISC?</p></Link>
          <Link to="/admissions"> <p>Admissions</p></Link> 
         <Link to="/curriculum"> <p>Curriculum</p></Link>  
          <Link to="/forparents">   <p>For Parents</p></Link>
        </div>
        
        
        </div>
    )
}
export default Header;