import "./Home.css"
import Navigation from "../Navigation/Navigation"
import {
    Routes,
    Route,
    Outlet 
} from "react-router-dom";

export default function Home() {

    return <div className="home">
        <Navigation />
        <div className="main">
            <Outlet/>
        </div>
    </div>
}