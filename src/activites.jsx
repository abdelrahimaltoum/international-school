import {  ArrowCircleRightOutlined } from "@mui/icons-material";
import "./activites.css";
import ActivitesItem from "./activitesItem";
import { Link } from "react-router-dom";

function Activites(){
    return(
        <div className="activites">
            <div className="activites-row">
                <Link to="/Technology-for-the-future">
                
            <ActivitesItem 
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/1-growth/tech/tech-2/tech-22/new22/technology---3/oth08828.jpg?h=4672&w=7008&hash=A889E95178C153EE9A758206B8E8DFEF" 
                name="Technology For Future" 
                info="At GEMS International School Cairo, the future is now"
                /></Link>
                  <Link to="/accreditations"><ActivitesItem 
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_generic-content-images/2accreditations.png?h=4673&w=7008&hash=2BDEFF21D48BC9E0D0C51A1D830E9F7B" 
                name="Accreditations" 
                info="Well reputed Education Accreditations" /></Link> 
            </div> <br/>
            <div className="activites-row">
            <Link to="/a-value-driven-community">  <ActivitesItem 
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_generic-content-images/3value-driven.png?h=4673&w=7008&hash=381BE566B04D3AE0A51260534834E2AC" 
                name="Values Driven" 
                info="Inspiring leaders and future thinkers" /></Link>
                <Link to="Enabling-learning-enviroment">  <ActivitesItem 
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_generic-content-images/4-enabling-learning-environment.png?h=4672&w=7008&hash=1920C4F3F272C37F6B2980A81B02DC1B" 
                name="Enabling Learning Enviroment" 
                info="creativity unleashed in every corner" /></Link> 
            </div>
        </div>
    )
}
export default Activites;