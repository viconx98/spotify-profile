import Icons from "../Icons/Icons"
import Tab from "../Tab/Tab"
import "./navigation.css"

export default function Navigation() {
    // Should come from redux later
    let currentTab = "profile" 
    
    // Should come from redux later
    let tabs = [
        {
            id: "profile",
            title: "Profile",
            image: null
        },
        {
            id: "topartists",
            title: "Top Artists",
            image: null
        },
        {
            id: "toptracks",
            title: "Top Tracks",
            image: null
        },
        {
            id: "recent",
            title: "Recent",
            image: null
        },
        {
            id: "playlists",
            title: "Playlists",
            image: null
        }
    ]

    const drawTab = (tab) => <Tab
        key={tab.id}
        id={tab.id}
        title={tab.title}
        image={tab.image}
        isSelected={tab.id === currentTab}
    />

    return <div className="navigation">
        <Icons name={"spotify"} height="40px" width="40px" />
        <div className="pages">
            {tabs.map(drawTab)}
        </div>
        <Icons name={"github"} height="40px" width="40px" />
    </div>
}