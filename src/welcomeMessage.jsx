import { Button } from "@mui/material";
import "./welcomemessage.css";
function WelcomeMessage(){
    return(
        <div className="welcome-message">
            <div className="welcome-message-left">
                <p>
                <span className="welcome-h3">WELCOME MESSAGE</span> <br/><br/>
                <span className="head-h3">From our Head of School</span></p>

                <h3>Ms. Catherine Spencer</h3>
                <p>What a joy it is for us to welcome all of you, new and old, to school year 2023-24 at GEMS International School Cairo.<br/><br/>

In our second full year of operation, we have doubled our enrollment to nearly 650 students!<br/><br/>

With this growth comes continued refinement of school logistics and we very much appreciate your patience and flexibility as we review daily the best ways to ensure our students and families are safe and secure. This year our students represent an increasingly diverse group from nearly twenty different nationalities, many recently relocating to Cairo from their home countries. </p>
          <Button variant="contained">Read More</Button>
            </div>
            <div className="welcome-message-right">
                <img src="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-top-right-images/principal-photo/catherine.jpg?h=700&w=620&hash=45C2860B60525B9532E258E4BA96EE16"/>
            </div>
        </div>
    )
}
export default WelcomeMessage;