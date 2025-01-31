import "./aboutUsNews.css";
function AboutUsNews({image , name , info}
){
    return(
        <div className="about-us-news-elment">
            <img src={image}/>
            <h3>{name}</h3>
            <p>{info}</p>
        </div>
    )
}
export default AboutUsNews;