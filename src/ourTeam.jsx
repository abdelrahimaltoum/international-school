import "./ourTeam.css";
import Teams from "./teams";

function OurTeam(){
    return(
        <div className="our-team">
            <h2>Our Team</h2>
            <p>
            We are a team of dedicated educators driven by passion, and guided by years of experience in nurturing young talents.<br/> We inspire, and encourage each student to be the best version of themselves, accept, and celebrate diversity, take <br/> ownership, and become proactive leaders, with the aim of changing the world for the better.
            </p>
            <div className="GISC-team">
                <div className="team-row">
                    <Teams
                    image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-top-right-images/bism-our-team/team/leadership-team-4/senior-leadership-team/untitled-design.jpg?h=700&w=620&hash=12D2B7A4A33CDC03FCA62D14AA5EE522"
                    name="Senior Leadership Team"
                    />
                     <Teams
                    image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/43/elementary--2/kindergarten.jpg?h=700&w=620&hash=A8A6BB416E6649D8FC1EB3BC67244980"
                    name="Kindergarten"
                    />
                     <Teams
                    image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/37/elementary-3/elementary.jpg?h=700&w=620&hash=042E84E98BD75C59AC89936E7184ADD9"
                    name="Elementary"
                    />
                     <Teams
                    image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/0038/middle-school/secondary.jpg?h=700&w=620&hash=79862112D15AF8FA261FC69DD2B8277A"
                    name="Secondary"
                    />
                </div>
                <div className="team-row">
                <Teams
                    image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/departments-specialists-620x700/specialist-department/our-dedicated-team.jpg?h=700&w=620&hash=410ABFC6471DA1E2235A154E2DABAA98"
                    name="Specialists Departments"
                    />
                     <Teams
                    image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_files-and-documents/gisc-com-sup/community-support.jpg?h=700&w=620&hash=C8938F9C0A6FA3375FDD6FB6912732AB"
                    name="Community Support"
                    />
                </div>
            </div>
        </div>
    )
}
export default OurTeam