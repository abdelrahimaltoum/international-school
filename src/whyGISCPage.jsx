import "./WhyGISCPage.css";
import WhyGISCPageItem from './whyGISCPageItem';
function WhyGISCPage(){

    return(
        <div className="Why-GISC-page">
            <div className="Why-GISC-page-upper">
                <h4>Where Geniuses Are Enabled to Make a Significant Impact</h4>
                <h2>Why GISC ?</h2>
                <p>
                We are very excited and pleased to introduce to you GEMS International School Cairo. Under the renowned GEMS<br/> international network, we have officially opened the doors of our purpose-built, high-tech, environmentally conscious<br/> school located in Rehab 2 during September 2022. We have opened our early years, primary, and middle year programs <br/> from PreK through Grade 11, and will add upper grades in subsequent years with a projected enrollment of 1400 students.
                </p>
                <h3>What Makes GISC Unique?</h3>
            </div>
            <div className="Why-GISC-page-lower">
            <div className="Why-GISC-page-lower-row">
                
               <WhyGISCPageItem
               image = "https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/accreditation-pic/accreditations.jpg?h=700&w=620&hash=A216ED131DFD3AEF83B9C82344EBF6F9"
               name="Accreditations"
               info = "In the competitive realm of education, GISC emerges as a beacon of academic excellence, recognised for its rigorous standards and commitment to nurturing well-rounded individuals."
               />
                 <WhyGISCPageItem
               image = "https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/education-experts-2.jpg?h=700&w=620&hash=1D4402F9775043F5C914FC7EFA950877"
               name="Educational Experts"
               info = "GISC will continue this legacy of excellence utilizing the GEMS network and our extensive personal experience to provide a stellar education to our students."
               />
                 <WhyGISCPageItem
               image = "https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/038/tech-3/future-technologies/tech-for-the-future/tech.jpg?h=700&w=620&hash=70E68B247998A942C0D1C630F005B4F8"
               name="Future Technology"
               info = "At GEMS International School Cairo, the future is NOW! From Pre-K through Grade 8 and beyond, our students will experience real-world technology every single day in their classrooms and throughout our school campus."
               />
                 <WhyGISCPageItem
               image = "https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/values-driven-2/values-driven-3/untitled-design.jpg?h=700&w=620&hash=08DE300741E9A8D3966EF52050C38367"
               name="Values-Driven Community"
               info = "Our primary objective at GISC is to prepare our students to make informed decisions about their future choices. "
               />
                </div>
              
            </div>
        </div>
    )
}
export default WhyGISCPage;