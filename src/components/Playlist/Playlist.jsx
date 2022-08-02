import "./Playlist.css"

export default function Playlist({playlist}){

    return <div className="playlist">
        <a href={playlist.external_urls.spotify} target="_blank"><img src={playlist.images[0].url} alt="" /></a>
        <p className="playlist-title">{playlist.name}</p>
        <p className="track-count">{playlist.tracks.total} Tracks   </p>
    </div>
}

// {
//     "collaborative": false,
//     "description": "",
//     "external_urls": {
//         "spotify": "https://open.spotify.com/playlist/0qaabJuLIgMqPDmrMA3hGF"
//     },
//     "href": "https://api.spotify.com/v1/playlists/0qaabJuLIgMqPDmrMA3hGF",
//     "id": "0qaabJuLIgMqPDmrMA3hGF",
//     "images": [
//         {
//             "height": 640,
//             "url": "https://i.scdn.co/image/ab67616d0000b273b492477206075438e0751176",
//             "width": 640
//         }
//     ],
//     "name": "Test",
//     "owner": {
//         "display_name": "SuperLiminal",
//         "external_urls": {
//             "spotify": "https://open.spotify.com/user/315kpvd7zc4ff3mzb6sexvta27sq"
//         },
//         "href": "https://api.spotify.com/v1/users/315kpvd7zc4ff3mzb6sexvta27sq",
//         "id": "315kpvd7zc4ff3mzb6sexvta27sq",
//         "type": "user",
//         "uri": "spotify:user:315kpvd7zc4ff3mzb6sexvta27sq"
//     },
//     "primary_color": null,
//     "public": false,
//     "snapshot_id": "MywxMzI3Mjg0YTFmOGIzOWJjMWM0ZjRjZGYxNDFkNjg4YmU1N2ExMDgy",
//     "tracks": {
//         "href": "https://api.spotify.com/v1/playlists/0qaabJuLIgMqPDmrMA3hGF/tracks",
//         "total": 1
//     },
//     "type": "playlist",
//     "uri": "spotify:playlist:0qaabJuLIgMqPDmrMA3hGF"
// }