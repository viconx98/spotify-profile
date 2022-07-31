import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import SpotifyAPI from "../../spotifyApi"
import Artist from "../Artist/Artist"
import Track from "../Track/Track"
import "./Profile.css"
import { setUser } from "../../slices/profileSlice"

export default function Profile() {
    let dispatch = useDispatch()

    let { accessToken, tokenType } = useSelector(state => state.auth)
    let { user } = useSelector(state => state.profile)

    const loadProfile = async () => {
        let response = await SpotifyAPI.me(accessToken, tokenType)
        let user = await response.json()
        dispatch(setUser(user))
    }

    useEffect(() => {
        loadProfile()
    }, [])

    return <div className="profile">
        <div className="profile-header">
            <img src="./images/icon_profile.png" alt="" />
            <p className="username">Johndoe</p>
            <div className="profile-stats">
                <p>10  <br /><span>Followers</span></p>
                <p>10  <br /><span>Following</span></p>
                <p>10  <br /><span>Playlists</span></p>
            </div>
            <button className="custom-button">
                Logout
            </button>
        </div>

        <div className="tops-container">
            <div className="top-section">
                <div className="top-header">
                    <p>Top Artists Of All Time</p>
                    <button className="custom-button">
                        See more
                    </button>
                </div>
                <div className="top-list">
                    <Artist />
                    <Artist />
                    <Artist />
                    <Artist />
                    <Artist />
                    <Artist />
                    <Artist />
                </div>
            </div>

            <div className="top-section">
                <div className="top-header">
                    <p>Top Artists Of All Time</p>
                    <button className="custom-button">
                        See more
                    </button>
                </div>
                <div className="top-list">
                    <Track />
                    <Track />
                    <Track />
                    <Track />
                    <Track />
                    <Track />
                    <Track />
                    <Track />

                </div>
            </div>
        </div>
    </div>
}