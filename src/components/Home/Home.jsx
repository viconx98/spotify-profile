import "./Home.css"
import Navigation from "../Navigation/Navigation"
import {
    Outlet
} from "react-router-dom";

import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";

export default function Home() {
    let { isLoading } = useSelector(state => state.ui)

    return <div className="home">
        <Navigation />
        <div className="main">
            {
                isLoading
                ? <Loading/>
                : <Outlet />
            }
        </div>
    </div>
}