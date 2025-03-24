import "./relatedPagesItem.css";

function RelatedPagesItem({image , name , info}){
    return(
        <div className="related-pages-item">
            <img src={image}/>
            <h3>{name}</h3>
            <p>{info}</p>
        </div>
    )
}
export default RelatedPagesItem;