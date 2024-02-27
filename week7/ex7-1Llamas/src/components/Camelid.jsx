import "./Camelid.css";
function Camelids({name, desc, image}) {
    return (
        <div className="camelidCard">
            <h1>{name}</h1>
            <p>{desc}</p>
            <img src={image} alt={name} />
            <div></div>
        </div>
    );

}
export default Camelids;