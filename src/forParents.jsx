import ForParentsNews from "./forParenrtsNews";
import "./forParents.css";

function ForParents(){
    return(
        <div classname="for-parents">
            <div className="for-parents-upper">
                <h2>For Parents</h2>
                <p>Together we dream, believe, and achieve leaving a memory of a remarkable journey.<br/><br/>

The key word is ‘together’. Parents and guardians should be at the heart of any child's education. While teachers are there at the front of the classroom, it's the family you come home to who provide an essential foundation for academic success. That's why we believe that parental involvement in school is so important.<br/><br/>

Research regularly demonstrates just how essential parent and caregiver engagement is to an excellent education. To make sure our pupils are given the very best start, we work hard to develop strong partnerships with the parents and guardians of our diverse body of students.</p>
            </div>
            <div className="for-parents-lower">
                <div className="for-parents-news-row">
                    <ForParentsNews 
                    image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/thumb-1/academic-calendar/academic-calendar-2/academic-calendar-3/academic-calendar.jpg?h=400&w=490&hash=D92C3132653186C2E7DA3AFC232DA294"
                    name="Academic Calendar"
                    info="Download our Academic Calendar in PDF format." />
                       <ForParentsNews 
                    image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/016/school-uniform--2/gisc-uniform/school-uniform.jpg?h=400&w=490&hash=B789B286E543F948F8614D752C5E237B"
                    name="School Uniform"
                    info="Shop for your child(ren) uniform by school year or by product." />
                       <ForParentsNews 
                    image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/thumb-3/parents-resources/parents-resources-2/parents/parents.jpg?h=400&w=490&hash=19C759E535F594A7D8B0CB6CCC312639"
                    name="Parents Resources"
                    info="Useful links for parents." />
                       <ForParentsNews 
                    image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/043/newsletter--2/newsletter---3/newsletters.jpg?h=400&w=490&hash=4EB6BE5B3BB4741CAFD86FE873C66BA0"
                    name="Newsletter"
                    info="See our latest school updates by downloading our newsletter." />
                </div>
                <div className="for-parents-news-row">
                <ForParentsNews 
                    image="https://www.gis-cairo.com/-/media/project/gems/shared/_shared-gems-heritage/sv_2023_thumb_.png?h=400&w=490&hash=081AB8745370B2E98202E16E05D5D340"
                    name="A Note From The Founder"
                    info="A personal message from our Founder, Mr. Sunny Varkey" />
                </div>
            </div>
        </div>
    )
}
export default ForParents;