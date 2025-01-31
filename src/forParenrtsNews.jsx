import "./forParentsNews.css";

function ForParentsNews({image , name , info}){
    return(
        <div className="for-parents-news">
            <img src={image}/>
            <h2>{name}</h2>
            <p>{info}</p>
        </div>
    )
}
export default ForParentsNews;