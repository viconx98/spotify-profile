import "./PostLogin.css"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../slices/authSlice"
import { useNavigate, useSearchParams } from "react-router-dom";
import SpotifyAPI from "../../spotifyApi";

export default function PostLogin() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let [queryParams, setQueryParams] = useSearchParams()

    const exchangeCode = async () => {
        let accessCode = queryParams.get("code")

        let response = await SpotifyAPI.authorize(accessCode)
        let token = await response.json()

        if (response.status === 200){
            dispatch(setToken(token))
            localStorage.setItem("token", JSON.stringify(token))
            navigate("/home/profile")
        }
    }

    useEffect(() => {
        exchangeCode()
    }, [])

    return <div className="post-login">
        <h3>Logging in...</h3>
    </div>
}