import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import SpotifyAPI from "../../spotifyApi"
import Artist from "../Artist/Artist"
import Track from "../Track/Track"
import "./Profile.css"
import { setUser } from "../../slices/profileSlice"
import Loading from "../Loading/Loading"

export default function Profile() {
    let dispatch = useDispatch()

    let { access_token: accessToken } = useSelector(state => state.auth.token)
    let { user } = useSelector(state => state.profile)

    console.log(user)

    const loadProfile = async () => {
        let response = await SpotifyAPI.me(accessToken)
        let userJson = await response.json()

        console.log(user, response.status)
        if (response.status === 200) {
            dispatch(setUser(userJson))
        }
    }

    useEffect(() => {
        if (user === null) {
            console.log('hit')
            // loadProfile()
        }
    }, [])

    return <div className="profile">
        {
            user === null
            ? <Loading />
            : <div className="profile-header">
                <img src="./images/icon_profile.png" alt="" />
                <p className="username">{user.display_name}</p>
                <div className="profile-stats">
                    <p>{user.followers.total}  <br /><span>Followers</span></p>
                    <p>10  <br /><span>Following</span></p>
                    <p>10  <br /><span>Playlists</span></p>
                </div>
                <button className="custom-button">
                    Logout
                </button>
            </div>
        }


        <div className="tops-container">
            <div className="top-section">
                <div className="top-header">
                    <p>Top Artists Of All Time</p>
                    <button className="custom-button">
                        See more
                    </button>
                </div>
                <div className="top-list">

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

                </div>
            </div>
        </div>
    </div>
}