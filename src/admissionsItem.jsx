import "./admissionsItem.css";

function AdmissionsItem({image , name , info}){

    return(
        <div className="admissions-item">
            <img src={image}/>
            <h2>{name}</h2>
            <p>{info}</p>
        </div>
    )
}
export default AdmissionsItem;