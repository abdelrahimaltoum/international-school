import { ArrowRightAltTwoTone } from "@mui/icons-material";
import "./activitesItem.css";

function ActivitesItem({image , name , info}){
    return(
        <div className="activites-item">
            <img src={image}/>
            <h3>{name}</h3>
          <span>  <p>{info}</p> <ArrowRightAltTwoTone/></span>
        </div>
    )
}
export default ActivitesItem;