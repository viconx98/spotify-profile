import "./Track.css"

export default function Track(){
    return <div className="track">
        <img src="./images/icon_profile.png" alt="" />
        <p className="track-title">
            Castle on the hill
            <br/>
            <span className="track-author">
            Castle on the hill • Castle on the hill
            </span>
        </p>
        <p className="duration">
            3:21
        </p>
    </div>
}