import "./Track.css"

export default function Track({ track }) {
    let temp = {
        album: {
            images: [1, 2, "test"],
            artists: [],
            name: "album"
        },
        external_urls: {
            spotify: "www.example.com"
        },
        name: "Test",
        duration_ms: 100000
    }
    const parseDuration = (ms) => {
        let min = 0
        while ((ms - 60000) > 0) {
            ms -= 60000
            min++
        }

        let minStr = min.toString().padStart(2, "0")
        let secStr = Math.round(ms / 1000).toString().padStart(2, "0")
        return `${minStr}:${secStr}`
    }

    return <div className="track">
        <img src={track.album.images[2].url} alt="" />
        <a className="track-title" href={track.external_urls.spotify} target="_blank" >
            {track.name}
            <br />
            <span className="track-author">
                {track.album.artists.map(a => a.name).join(", ")} • {track.album.name}
            </span>
        </a>
        <p className="duration">
            {parseDuration(track.duration_ms)}
        </p>
    </div>
}