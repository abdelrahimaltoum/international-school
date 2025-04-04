
import { Button } from "@mui/material";
import"./contactUs.css";

function ContactUs(){
    return(
        <div className="contact-us">
            <h2>Get a call back</h2>
            <p>
            Fill in the below form and we will call you back to take you through your exciting educational journey<br/><br/>

You can also contact us on the following numbers:<br/><br/>
<span>For Admissions:</span> 002 010 12345 678/ 002 010 11111 123<br/><br/>
<span>Email:</span> registrar_gic@example.com
            </p>
       
        <form className="contact-form">
           
        <label>Title</label>
        <select>
            <option>Mr.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
        </select>
        <label>Parent's First Name</label>
        <input type="text"/>
        <label>Parent's Last Name</label>
        <input type="text"/>
        <label>Child's Name</label>
        <input type="text"/>
        <label>Child's Age</label>
        <input type="text"/>
        <label>Your email</label>
        <input type="text"></input>
        <label>Phone number</label>
        <input/>
        <label>What would you like to talk to us about?</label>
        <select>
            <option></option>
            <option>Book a school tour</option>
            <option>Enrolling my child</option>
            <option>School calender adn activites</option>
            <option>Academic information</option>
        </select>
        <label>Additional Notes</label>
        <input type="text"/>
        <Button>Submit</Button>
        </form>
         </div>
    )
}
export default ContactUs;