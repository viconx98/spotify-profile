export default function Icons({ name, height, width }) {
    console.log('Hi! Hi! Hi!',name);
    let imageStyle = {
        height: height,
        width: width
    }

    switch (name) {
        case "spotify":
            return <img style={imageStyle} src="/images/logo_spotify.svg" alt="" />
        case "github":
            return <img style={imageStyle} src="/images/logo_github.png" alt="" />
        default:
            return null
    }
}