import { ArrowCircleRightOutlined, ArrowCircleRightRounded, ArrowRightAltTwoTone, ArrowRightRounded, KeyboardArrowRight, KeyboardArrowRightOutlined, KeyboardArrowRightRounded } from "@mui/icons-material";
import "./activitesItem.css";

function ActivitesItem({image , name , info}){
    return(
        <div className="activites-item">
            <img src={image}/>
            <h3>{name}</h3>
          <span>  <p>{info}</p> <ArrowCircleRightOutlined/></span>
        </div>
    )
}
export default ActivitesItem;