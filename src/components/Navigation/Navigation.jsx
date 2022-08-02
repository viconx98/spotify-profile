import Icons from "../Icons/Icons"
import Tab from "../Tab/Tab"
import "./Navigation.css"
import { useSelector, useDispatch } from "react-redux"
import { setSelectedTab } from "../../slices/uiSlice"
import { useNavigate } from "react-router-dom"

const tabs = [
    {
        id: "profile",
        title: "Profile",
    },
    {
        id: "topartists",
        title: "Top Artists",
    },
    {
        id: "toptracks",
        title: "Top Tracks",
    },
    {
        id: "recent",
        title: "Recent",
    },
    {
        id: "playlists",
        title: "Playlists",
    }
]

export default function Navigation() {
    let { selectedTab } = useSelector(state => state.ui)
    let dispatch = useDispatch()
    let navigate = useNavigate()

    const drawTab = (tab) => <Tab
        key={tab.id}
        id={tab.id}
        title={tab.title}
        isSelected={tab.id === selectedTab}
        clickHandler={() => {
            dispatch(setSelectedTab(tab.id))
            navigate(`${tab.id}`)
        }}
    />

    return <div className="navigation">
        <div className="nav-icon"><Icons name={"spotify"} height="50px" width="50px" /></div>
        <div className="pages">
            {tabs.map(drawTab)}
        </div>
        <div className="nav-icon"><Icons name={"github"} height="40px" width="40px" /></div>
    </div>
}