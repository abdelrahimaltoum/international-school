import { Button } from "@mui/material";
import "./whyGISC.css";
import { Link } from "react-router-dom";

function WhyGISC(){
    return(
        <div className="why-GISC">
            <div className="why-GISC-left">
                <h3>Why GISC?</h3>
                <p>
                GISC is now an Authorized School for the PYP, MYP, and a Candidate School* for the DP Programme. GISC is pursuing authorization as an IB World School. These are schools that share a common philosophy—a commitment to high quality, challenging, international education that GISC believes is important for our students. <br/> <br/> 

*Only schools authorized by the IB Organization can offer any of its four academic programmes: the Primary Years Programme (PYP), the Middle Years Programme (MYP), the Diploma Programme, or the Career-related Programme (CP). Candidate status gives no guarantee that authorization will be granted. For further information about the IB and its programmes, visit www.ibo.org
                </p>
              <Link to="/whyGISC"><Button>Why GISC?</Button></Link>  
            </div>
            <div className="why-GISC-right">
                <img src="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_generic-content-images/why-gisc.png?h=4672&w=7009&hash=6C67F12928CAD361BA6BDF8198032F85"/>
            </div>
        </div>
    )
}
export default WhyGISC;