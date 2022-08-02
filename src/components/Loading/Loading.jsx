import { useEffect, useRef, useState } from "react"
import "./Loading.css"

export default function Loading({text = "Loading"}){
    let [dots, setDots] = useState("")
    let intervalId = useRef(null)

    useEffect(() => {
        intervalId.current = setInterval(() => {
            setDots(d => d.length === 3 ? "" : d + ".")
        }, 200)

        return () => clearInterval(intervalId.current)
    }, [])

    return <div className="loading">
        <h3>{text + dots}</h3>
    </div>
}