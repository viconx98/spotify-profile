import "./Profile.css"

export default function Profile() {

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
            <div className="top-artists-container">
                <div className="top-header">
                    <p>Top Artists Of All Time</p>
                    <button className="custom-button">
                        See more
                    </button>
                </div>
            </div>
            
            <div className="top-artists-container">
                <div className="top-header">
                    <p>Top Artists Of All Time</p>
                    <button className="custom-button">
                        See more
                    </button>
                </div>
            </div>
        </div>
    </div>
}