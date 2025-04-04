import { ImageSearchRounded } from "@mui/icons-material";
import "./vision.css";

function Vision(){
    return(
        <div className="vision">
            <div className="vision-upper">
                
            <div className="vision-upper-left">
                <h2>Vision and Mission</h2>
                 <span>GISC Mission Statement</span>
                <p>We see genius in every child. We enable them to make an impact.</p>
               
                <span>GISC VISION</span>
                <p>GISC empowers the genius in every child through knowledge, skills, and values in an international educational setting, allowing each student to thrive both personally and academically. We nurture the driving passion to enable our students to make a powerful impact in their community and the world.</p>

                </div>
                <div className="vision-upper-right">
                <img src="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-top-right-images/vision-and-mission-/vision-and-mission-option-one.jpg?h=700&w=620&hash=66DD526DC53049DB7EE24DE21917EC9D"/>
            </div> 
            </div>
            <div className="vision-lower">
                <span>Our Legacy</span>
                <img src="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_design-images/legacy.png?h=221&w=888&hash=FB6EFF42A752C29E178723522D8B633F"/>
            </div>
           
        </div>
    )
}
export default Vision;