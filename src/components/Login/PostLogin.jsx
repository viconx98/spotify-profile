import "./PostLogin.css"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../slices/authSlice"
import { useNavigate } from "react-router-dom";

export default function PostLogin() {
    let dispatch = useDispatch()
    let navigate = useNavigate()

    const parseToken = () => Object.fromEntries(
        window.location.href.split("#")[1]
            .split("&")
            .map(e => e.split("=")
            )
    )

    useEffect(() => {
        setTimeout(() => {
            let token = parseToken()
            dispatch(setToken(token))
            navigate("/home/profile")
        }, 2000)
    }, [])

    return <div className="post-login">
        <h3>Logging in...</h3>
    </div>
}