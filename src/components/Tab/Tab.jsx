import Icons from "../Icons/Icons"
import "./Tab.css"

export default function Tab({ id, title, image, isSelected, clickHandler }) {
    let tabStyle = isSelected ? "tab selected" : "tab"
    
    return <div className={tabStyle} onClick={clickHandler}>
        {isSelected && <div className="border" />}
        <Icons name={id} height="24px" width="24px"/>
        <p>{title}</p>
    </div>
}