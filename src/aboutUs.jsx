import "./aboutUs.css";
import AboutUsNews from "./aboutUsNews";


function AboutUs(){
    return(
        <div className="about-us">
        <div className="about-us-upper">
        <h3>GEMS International School Cairo</h3>
        <h2>about us</h2>
        <p>
        Under the renowned GEMS international network, we opened the doors of our purpose-built, high tech, environmentally conscious school located in New Cairo, Rehab 2 in September 2022.<br/><br/>

We initially opened our early years, primary and middle schools in 2022, adding upper grades in subsequent years with a projected enrollment of 1400 students. Our school is notable for its emphasis on inclusion and diversity, future thinking technology skills, and most importantly, developing impactful global citizens with a mission to serve our world: Inspiring Leaders, Future Thinkers, Fearless Explorers, Diversity Ambassadors.
        </p>
        </div>
        <div className="about-us-news">
            <div className="about-us-news-row">
                <AboutUsNews
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-top-right-images/6/our-school.jpg?h=700&w=620&hash=C3556F76A585A188722B87F1560FC5BF"
                name="Our School - GEMS Int. School Cairo"
                info="We are very excited and pleased to introduce to you GEMS International School Cairo."/>
                 <AboutUsNews
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-top-right-images/principal-photo/catherine.jpg?h=700&w=620&hash=45C2860B60525B9532E258E4BA96EE16"
                name="Message from our Head"
                info="What a joy it is for us to welcome all of you, new and old, to school year 2024-2025 at GEMS International School Cairo."/>
                 <AboutUsNews
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-top-right-images/vision-and-mission-.jpg?h=700&w=620&hash=E51233AE6030059DC5CC29CC9CA0E40F"
                name="Vision and Mission"
                info="We empower the genius in every child and enable them to make an impact."/>
                 <AboutUsNews
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/core-values--.jpg?h=700&w=620&hash=CFEF9B495276B7B25A9A5C1DE0F5A98F"
                name="Our Core Values"
                info="At GISC we provide each student with a holistic, inquiry-based, and engaging curriculum. "/>
            </div>
            <div className="about-us-news-row">
            <AboutUsNews
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/our-team-.jpg?h=700&w=620&hash=7C51209591837187F5755CF0E6CA7E2C"
                name="Our Dedicated Team"
                info="We are a team of dedicated teachers driven by passion and guided by years of experience in educating young talents."/>
                <AboutUsNews
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-top-right-images/swimming-pool/gallery-/campus.png?h=700&w=620&hash=985647997279EA6C6496F78DBF1A4FB5"
                name="Campus and Location"
                info="We believe in the importance of well-being and striking the right balance between academic pursuits and leisure. "/>
                <AboutUsNews
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/hs.jpg?h=700&w=620&hash=946325CE17053BB88211C113FC773B92"
                name="Health & Safety"
                info="GEMS Education has 60 years' experience of delivering the highest standards in Health and Safety across our schools."/>
                <AboutUsNews
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-thumbnails/vacancies-/untitled-design.jpg?h=700&w=620&hash=8306F07699AB695B0F801C847BE9F2AA"
                name="Vacancies"
                info="We welcome employment inquiries from experienced, qualified teachers and those seeking administrative positions. "/>
            </div>
            <div className="about-us-news-row">
            <AboutUsNews
                image="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-top-right-images/6/the-gems-difference.png?h=700&w=620&hash=C8E406A8AC703AADEDE2EE7609A2A265"
                name="The GEMS Difference"
                info="From humble beginnings, GEMS Education has grown to become one of the world's largest private education providers."/>
            </div>
           
        </div>
            
        </div>
    )
}
export default AboutUs;