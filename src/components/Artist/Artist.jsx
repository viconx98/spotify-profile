import "./Artist.css"

export default function Artist({name, image}){
    return <div className="artist">
        <img src="./images/icon_profile.png" alt="" />
        <p>John Doe</p>
    </div>
}