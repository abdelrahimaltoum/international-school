import "./curriculumItem.css";

function CurriculumItem({image , name ,info}){
    return (
        <div className="curriculum-item">
            <img src={image}/>
            <h2>{name}</h2>
            <p>{info}</p>
        </div>
    )
}
export default CurriculumItem;