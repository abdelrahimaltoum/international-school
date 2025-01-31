import "./curriculum.css";
import CurriculumItem from "./curriculumItem";
function Curriculum(){
    return(
        <div className="curriculum">
            <div className="curriculum-upper">
                <h2>Curriculum</h2>
                <h3>American International Curriculum</h3>
                <p>
                Our American International curriculum is our carefully chosen approach to ensure your child’s holistic development with a range of educational and enrichment programs. It fosters children’s creativity and individual capabilities, utilizing proactive teaching methods in a personalized learning environment.<br/><br/>

Our curriculum develops critical thinking and communication skills enhancing the students’ ability to adapt and contribute to their community and world. It emphasizes students’ personal development, encouraging diversity, international mindedness, curiosity, and a passion for learning. <br/><br/>

Our unique teaching approach helps students build understanding through inquiry, action, and reflection. Most importantly, it enables them to gain independence of thought, the ability to explore and find out for themselves and use their critical thinking skills to solve problems. They are taught how to think out of the box and to express themselves in so many ways.<br/>
                </p>
                <h3>IB World School </h3>
                <p>
                As GISC is an IB World School offering the PYP (Primary Years Programme) and MYP (Middle Years Programme) and the DP (Diploma Programme), GISC empowers its students to take ownership of their learning and become well-rounded global citizens through its rigorous and comprehensive educational framework, igniting independent thinking, creativity, and a profound understanding of real-world challenges.<br/><br/>

Only schools authorized by the IB Organization can offer any of its four academic programmes: the IB Primary Years Programme (PYP), the IB Middle Years Programme (MYP), the IB Diploma Programme, or the Career-related Programme (CP). For further information about the IB and its programmes, visit www.ibo.org <br/>
                </p>
            <h3>Measures of Academic Progress (MAP) Tests</h3>
            <p>
            MAP Tests are internationally recognized benchmarks for students from Grade 2 through Grade 10, GISC administers MAP Tests 3 times a year through Fall, Winter, and Spring.<br/>
            </p>
            </div>
            <div className="curriculum-lower">
                <CurriculumItem
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/016/enabling-learning/elementary/early-years.jpg?h=700&w=620&hash=090EC757F027F609A96534BAFCF8B1C6"
                name="Early Years"
                info="Develop skills in an inquiry-infused, structured, play-based approach"
                />
                  <CurriculumItem
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/sec-main/elementary-2/elementary.jpg?h=700&w=620&hash=86293BB952845C5E30A672F899B34A35"
                name="Elementary School"
                info="Our Elementary School is split into two key stages; Key Stage One and Key Stage Two."
                />
                  <CurriculumItem
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/0038/middle-school---2/middle-school.jpg?h=700&w=620&hash=700DC030C02D25BC4D09DF082730F7D8"
                name="Middle-High School"
                info="Our Middle-High framework encourages students aged 11 to 16 "
                />

            </div>
        </div>
    )
}
export default Curriculum;