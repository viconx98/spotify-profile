import "./PostLogin.css"
import { useSearchParams } from "react-router-dom";

export default function PostLogin(){
    let [queryParams, setQueryParams] = useSearchParams()
    
    return <div className="post-login">
        <h3>Logging in...</h3>
    </div>
}