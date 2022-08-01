import React, { useEffect } from 'react';
import './Login.css';
import SpotifyAPI from '../../spotifyApi';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"

export default function Login() {
    let navigate = useNavigate()
    const { token } = useSelector(state => state.auth)

    const attemptLogin = async () => {
        window.location.href = SpotifyAPI.authUrl()
    }

    useEffect(() => {
        // TODO: Check for refresh
        if (token !== null) {
            navigate("/home/profile")
        }
    }, [])

    return (
        <div className="login-main-container">
            <h3>Spotify Profile</h3>
            <button onClick={attemptLogin}>LOG IN TO SPOTIFY</button>
        </div>
    )
}
