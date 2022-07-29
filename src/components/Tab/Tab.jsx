import "./tab.css"

export default function Tab({ id, title, image, isSelected, clickHandler }) {
    let tabStyle = isSelected ? "tab selected" : "tab";

    return <div className={tabStyle} onClick={clickHandler}>
        <img src="./" alt="" />
        <p>{title}</p>
    </div>
}