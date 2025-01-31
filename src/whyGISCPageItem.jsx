import "./whyGISCPageItem.css";

function WhyGISCPageItem({image , name , info}){
  return(
    <div className="why-GISC-page-item">
        <img src={image}/>
        <h2>{name}</h2>
        <p>{info}</p>
    </div>
 )
}
export default WhyGISCPageItem;