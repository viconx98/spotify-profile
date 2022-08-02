import React from 'react';
import './Login.css';
import { authUrl } from '../../slices/authSlice';


export default function Login() {
    const attemptLogin = async () => {
        window.location.href = authUrl()
    }

    return (
        <div className="login-main-container">
            <h3>Spotify Profile</h3>
            <button onClick={attemptLogin}>LOG IN TO SPOTIFY</button>
        </div>
    )
}
