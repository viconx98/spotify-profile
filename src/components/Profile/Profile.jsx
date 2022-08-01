import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import SpotifyAPI from "../../spotifyApi"
import "./Profile.css"
import { setUser, setUserTopArtists, setUserTopTracks, setIsLoading, setFollowing, setPlaylists } from "../../slices/profileSlice"
import Loading from "../Loading/Loading"
import { setToken } from "../../slices/authSlice"
import { useNavigate, browserHistory } from "react-router-dom"

export default function Profile() {
    let dispatch = useDispatch()
    let navigate = useNavigate()

    let { access_token: accessToken } = useSelector(state => state.auth.token)
    let { user, userTopArtists, userTopTracks, isLoading } = useSelector(state => state.profile)

    const loadUser = async () => {
        let response = await SpotifyAPI.me(accessToken)
        let responseJson = await response.json()

        if (response.status === 200) {
            dispatch(setUser(responseJson))
            dispatch(setIsLoading(false))
        }
    }

    const loadUserTops = async () => {
        let response = await SpotifyAPI.meTopArtists(accessToken)
        let responseJson = await response.json()

        if (response.status === 200) {
            dispatch(setUserTopArtists(responseJson))
        }

        response = null
        responseJson = null

        response = await SpotifyAPI.meTopTracks(accessToken)
        responseJson = await response.json()

        if (response.status === 200) {
            dispatch(setUserTopTracks(responseJson))
        }

        dispatch(setIsLoading(false))
    }

    const loadUserStats = async () => {
        let response = await SpotifyAPI.meFollowing(accessToken)
        let responseJson = await response.json()

        dispatch(setFollowing(responseJson.artists.total))
        
        response = await SpotifyAPI.mePlaylists(accessToken)
        responseJson = await response.json()
        
        dispatch(setPlaylists(responseJson.total))
    }

    const logout = () => {
        dispatch(setToken(null))
        navigate("/")
    }

    useEffect(() => {
        if (user === null) {
            loadUser()
            loadUserTops()
            loadUserStats()
        }
    }, [])

    return <div className="profile">
        {
            isLoading
                ? <Loading />
                : <>
                    <div className="profile-header">
                        <img src="./images/icon_profile.png" alt="" />
                        <p className="username">{user.display_name}</p>
                        <div className="profile-stats">
                            <p>{user.followers.total}  <br /><span>Followers</span></p>
                            <p>{user.following}  <br /><span>Following</span></p>
                            <p>{user.playlists}  <br /><span>Playlists</span></p>
                        </div>
                        <button className="custom-button" onClick={logout}>
                            Logout
                        </button>
                    </div>


                    <div className="tops-container">
                        <div className="top-section">
                            <div className="top-header">
                                <p>Your Top Artists</p>
                                <button className="custom-button">
                                    See more
                                </button>
                            </div>
                            <div className="top-list">

                            </div>
                        </div>

                        <div className="top-section">
                            <div className="top-header">
                                <p>Your Top Tracks</p>
                                <button className="custom-button">
                                    See more
                                </button>
                            </div>
                            <div className="top-list">

                            </div>
                        </div>
                    </div>
                </>
        }
    </div>
}