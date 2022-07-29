import React from 'react';
import './profile.css';

export default function Profile() {
    return (
        <>
            <div className="profile-container">
                <div className="profile">
                    <div id="profile-img">
                        <img src="/images/profile-image.png" alt="" />
                    </div>
                    <h1>John Doe</h1>
                    <div id="profile-info">
                        <div>
                            <p className='profile-stat'>0</p>
                            <p className='profile-stat-name'>FOLLOWERS</p>
                        </div>
                        <div>
                            <p className='profile-stat'>12</p>
                            <p className='profile-stat-name'>FOLLOWING</p>
                        </div>
                        <div>
                            <p className='profile-stat'>3</p>
                            <p className='profile-stat-name'>PLAYLISTS</p>
                        </div>
                    </div>
                    <button id="logout-button">LOGOUT</button>
                </div>
            </div>
        </>
    )
}
