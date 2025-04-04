import { Link } from "react-router-dom";
import "./admissions.css";
import AdmissionsItem from "./admissionsItem";
 function Admissions(){

    return(
        <div className="admissions">
            <div className="admissions-upper">
                <h1>Admissions Overview</h1>
                <h2>Admissions</h2>
                <p>Thank you for your interest in joining the GEMS International School Cairo family. Admissions for the year 2025-2026 are now open from Pre-K to Grade 11. 

We invite you to join both local and international families who aspire to a premier international education for their children. 

 </p>
            </div>
            <div className="admissions-lower">
            <div className="admissions-lower-row">
          <Link to="/how-to-apply"><AdmissionsItem
                image = "https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/35/how-to-apply--2.jpg?h=700&w=620&hash=8B74ABF93EF6D0F21E5BAE11DC4D8042"
                name = "How to Apply"
                info = "Fill in the online application form with the required documents."/></Link>      
            <Link to="/age-replacement-guide" >    <AdmissionsItem
                image = "https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/34/academic-excellence/age-placement-guide.jpg?h=700&w=620&hash=6B9EEC353997497AACFCAEE11C6893D8"
                name = "Age Placement Guide"
                info = "Discover the perfect age placement for your child with our comprehensive Age Placement Guide."/></Link>  
                  
              <Link to="/online-payment">    <AdmissionsItem
                image = "https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-top-right-images/online-payment/8-recovered/payment/online-payment.png?h=700&w=620&hash=1734B123F53F15114B69069095C5FFAF"
                name = "Online Payment"
                info = "You can now make all your payments to school conveniently while safe at home."/></Link> 
            
           
        <Link to="/School-transport">   <AdmissionsItem
                image = "https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-top-right-images/untitled-desig/transportation---2.jpg?h=700&w=620&hash=D1445CA8E87092315B320DA6D5D9A6C0"
                name = "School Transport"
                info = "Our School Transportation service provider, Option Travel is a leading bus transportation provider with the daily operation of 300+ buses."/></Link> 
                </div>
            </div>
        </div>
    )
}
export default Admissions;