import "./Artist.css"

export default function Artist({artist}){
    return <div className="artist">
        <img src={artist.images[2].url} alt="" />
        <p>{artist.name}</p>
    </div>
}