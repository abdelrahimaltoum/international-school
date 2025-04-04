import "./campus.css";

function Campus(){
    return(
    <div className="campus">
        <div className="campus-info">
            <h2>Campus and Location</h2>
            <div className="campus-info-body">
                <div className="campus-info-left">
                    <p>
                    Our facilities mirror the quality educational experiences we<br/> provide to our students. We want them involved. We want <br/>them to see for themselves and explore their possibilities to <br/>the fullest, wherever their passion lies.
                    </p>
                    <h3>Our Facilities List:</h3>
                    <p>
                    Makerspaces<br/><br/>
Robotics Lab<br/><br/>
Lego Indoor Playing Area<br/><br/>
Library <br/><br/>
Multipurpose Hall<br/><br/>
Music Room<br/><br/>
Art Room<br/><br/>
Modern Classrooms<br/><br/>
Innovation / Design and Technology Labs<br/><br/>
Swimming Pools<br/><br/>
                    </p>
                </div>
                <div className="campus-info-right">
                    <img src="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_page-top-right-images/swimming-pool/gallery-/campus.png?h=700&w=620&hash=985647997279EA6C6496F78DBF1A4FB5"/>
                </div>
            </div>
        </div>
        <div className="campus-Facilities">
            <h3>Gallery of our Facilities</h3>
            
            <div className="facilities-photos-row">
            <img src="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_generic-content-images/facilities/football-court/football-court.jpg"/>
            <img src="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_files-and-documents/facilities/mph.jpg"/>
            <img src="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_files-and-documents/facilities/swimming-pool.jpg"/>
            </div>
            <div className="facilities-photos-row">
                <img src="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_files-and-documents/facilities/playground.jpg"/>
                <img src="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_files-and-documents/facilities/science-lab.jpg"/>
                <img src="https://www.gis-cairo.com/-/media/project/gems/gisc_gems_international_school_cairo/_files-and-documents/facilities/library.jpg"/>
            </div>
            </div>
            <div className="location">
            <h2>Our Location</h2>
          
            <img src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1"/>
              </div>
       
    </div>
    )
}
export default Campus;