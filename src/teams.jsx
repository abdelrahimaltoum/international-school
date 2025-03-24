import "./teams.css";

function Teams ({image , name}){
return(
    <div className="teams">
        <img src={image}/>
        <h2>{name}</h2>
    </div>
)
}
export default Teams;