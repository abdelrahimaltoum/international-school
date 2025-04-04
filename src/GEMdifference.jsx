import { Button } from "@mui/material";
import "./GEMdifference.css";

function GEMdiffernce(){
    return(
        <div className="GEM-difference">
            <h2>The GEMS Difference</h2>
            <img src="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/cm_website_banner_jan2022_v1.png"/>
       <span>     <p>There's much more to a GEMS education than just great schools that set a benchmark for quality education. Every one of our schools is built on the same core values that encourage every GEMS student, regardless of their age, to develop a social conscience and become an active member of the global community.</p></span>
            <div className="GEM-legacy">
            <div className="GEM-legacy-left">
                <h2>A Legacy of Over 60 Years</h2>
            <p>  <span>  GEMS Education</span>, a family business to this day, is the<span> most well-regarded choice for quality private education</span> in the Middle East and North Africa region. Today one of the world's largest private education providers, it has<span>44 schools </span> in UAE and Qatar, educating over <span>119,000 students</span>, as well as schools in KSA, Egypt, Europe, Africa, India, Southeast Asia and North America, with an unwavering mission: <span>to put a quality education within the reach of every learner no matter where they are.</span></p>
                 <Button>Explore the GEM Difference</Button>  </div>
                <div className="GEM-legacy-right">
                <img src="https://www.gis-cairo.com/-/media/project/gems/daa_gems_dubai_american_academy/gems-difference/gems-difference-photo.png?h=585&w=615&hash=8297EFCFBDE7C482FF6E934C72C896E3"/>
               
                </div>
              
            </div>
        </div>
    )
}
export default GEMdiffernce;