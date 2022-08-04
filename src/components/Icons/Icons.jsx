export default function Icons({ name, height = "50px", width = "50px" }) {
    let imageStyle = {
        height: height,
        width: width
    }

    switch (name) {
        case "spotify":
            return <img style={imageStyle} src="/images/logo_spotify.svg" alt="" />
        case "github":
            return <img style={imageStyle} src="./images/logo_github.svg" alt="" />
        case "profile":
            return <img style={imageStyle} src="./images/icon_profile.png" alt="profile" />
        case "topartists":
            return <img style={imageStyle} src="./images/icon_top_artists.png" alt="profile" />
        case "toptracks":
            return <img style={imageStyle} src="./images/icon_top_tracks.png" alt="profile" />
        case "recent":
            return <img style={imageStyle} src="./images/icon_recents.png" alt="profile" />
        case "playlists":
            return <img style={imageStyle} src="./images/icon_playlists.png" alt="profile" />
        default:
            return null
    }
}