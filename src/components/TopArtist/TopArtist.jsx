import "./TopArtist.css"

export default function TopArtist({ artist }) {
    return <a href={artist.external_urls.spotify} target="_blank" className="artist-link">
        <div className="top-artist">
            <img src={artist.images[0].url} alt="" />
            <p>{artist.name}</p>
        </div>
    </a>
}