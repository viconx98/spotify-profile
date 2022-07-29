import "./tab.css"

export default function Tab({ id, title, image, isSelected }) {
    let tabStyle = isSelected ? "tab selected" : "tab" 
    
    return <div className={tabStyle}>
        <img src="./" alt="" />
        <p>{title}</p>
    </div>
}