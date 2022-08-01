import "./PostLogin.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { exchangeCode } from "../../slices/apiSlice"


export default function PostLogin() {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let {isAuthComplete} = useSelector(state => state.api)
    let [queryParams, setQueryParams] = useSearchParams()

    const attemptExchangeCode = async () => {
        if (isAuthComplete) {
            navigate("/home/profile")
        } else {
            let accessCode = queryParams.get("code")
            dispatch(exchangeCode(accessCode))
        }
    }

    useEffect(() => {
        attemptExchangeCode()
    }, [isAuthComplete])

    return <div className="post-login">
        <h3>Logging in...</h3>
    </div>
}