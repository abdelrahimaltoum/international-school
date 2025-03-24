import "./relatedPages.css";
import RelatedPagesItem from "./relatedPagesItem";

function RelatedPages(){
    return(
        <div className="related-pages">
            <h3>Realted Pages</h3>
            <div className="related-pages-row">
                <RelatedPagesItem
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-top-right-images/6/our-school/our-school-visual-website/our-school-visual-website.jpg?h=700&w=620&hash=AB6EB6DB2C13CBD4506D2593AB1D58DD"
                name="Our School - GEMS Int. School Cairo"
                info=" We are very excited and pleased to introduce to you GEMS International School Cairo."/>
                 <RelatedPagesItem
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-top-right-images/vision-and-mission-/vision-and-mission-option-one.jpg?h=700&w=620&hash=66DD526DC53049DB7EE24DE21917EC9D"
                name="Vision and Mission"
                info="We empower the genius in every child and enable them to make an impact."/>
                 <RelatedPagesItem
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/core-values--/vision-and-mission-option-two.jpg?h=700&w=620&hash=404736F1A9BF79C12E9E4BC01297412B"
                name="Our Core Values"
                info="At GISC we provide each student with a holistic, inquiry-based, and engaging curriculum. "/>
                 <RelatedPagesItem
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/our-team-/our-dedicated-team/dedicated-team.jpg?h=700&w=620&hash=53562CE22F252834B113CF1C735D5B71"
                name="Our Dedicated Team"
                info="We are a team of dedicated teachers driven by passion and guided by years of experience in educating young talents."/>
            </div>
            <div className="related-pages-row">
            <RelatedPagesItem
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-top-right-images/swimming-pool/gallery-/campus.png?h=700&w=620&hash=985647997279EA6C6496F78DBF1A4FB5"
                name="Campus and Location"
                info="We believe in the importance of well-being and striking the right balance between academic pursuits and leisure. "/>
                 <RelatedPagesItem
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/hs.jpg?h=700&w=620&hash=946325CE17053BB88211C113FC773B92"
                name="Helath and Safety"
                info="GEMS Education has 60 years' experience of delivering the highest standards in Health and Safety across our schools."/>
                 <RelatedPagesItem
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/vacancies-/untitled-design/vacancies.jpg?h=700&w=620&hash=18135E8802099345309FBDDBFC4AE2A0"
                name="Vacancies"
                info="We welcome employment inquiries from experienced, qualified teachers and those seeking administrative positions. "/>
                 <RelatedPagesItem
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-top-right-images/6/the-gems-difference.png?h=700&w=620&hash=C8E406A8AC703AADEDE2EE7609A2A265"
                name="The GEMS Difference"
                info="From humble beginnings, GEMS Education has grown to become one of the world's largest private education providers"/>
            </div>
            
        </div>
    )
}
export default RelatedPages;