import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import "./Profile.css"
import Loading from "../Loading/Loading"
import Artist from "../Artist/Artist"
import { getUser, getUserTopArtists, getUserTopTracks, getUserStats } from "../../slices/apiSlice"
import { useNavigate } from "react-router-dom"

import Track from "../Track/Track"

export default function Profile() {
    let dispatch = useDispatch()
    let navigate = useNavigate()

    let { user, userTopArtists, userTopTracks, userFollowing, userPlaylists, isLoading } = useSelector(state => state.profile)

    const logout = () => {
        localStorage.clear()
        navigate("/")
    }

    useEffect(() => {
        console.log("useEffect > Profile")
        if (user === null) {
            dispatch(getUser())
            dispatch(getUserTopArtists())
            dispatch(getUserTopTracks())
            dispatch(getUserStats())
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
                            <p>{userFollowing}  <br /><span>Following</span></p>
                            <p>{userPlaylists}  <br /><span>Playlists</span></p>
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
                                {
                                    userTopArtists.length === 0
                                        ? <p>You don't have any top artists</p>
                                        : userTopTracks.map(<Artist />)
                                }
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
                                {
                                    userTopArtists.length === 0
                                        ? <p>You don't have any top tracks</p>
                                        : userTopTracks.map(<Track />)
                                }
                            </div>
                        </div>
                    </div>
                </>
        }
    </div>
}