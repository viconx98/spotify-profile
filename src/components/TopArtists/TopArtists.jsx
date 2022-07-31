import TopArtist from "../../TopArtist/TopArtist"
import "./TopArtists.css"
import { useSelector, useDispatch } from "react-redux"
import { setCurrentFilter } from "../../slices/topArtistsSlice"

export default function TopArtists() {
    const dispatch = useDispatch()
    const {currentFilter} = useSelector(state => state.topArtists)
    
    const filters = [
        {
            id: 1,
            title: "All time"
        },
        {
            id: 2,
            title: "Last 6 Months"
        },
        {
            id: 3,
            title: "Last Month"
        }
    ]

    const drawFilter = (filter) => {
        let cls = filter.id === currentFilter ? "filter selected" : "filter"
        return <p className={cls} onClick={e => dispatch(setCurrentFilter(filter.id))}>{filter.title}</p>
    }

    return <div className="top-artists">
        <div className="header">
            <h3>Top Artists</h3>
            <div className="filters">
                {filters.map(drawFilter)}
            </div>
        </div>

        <div className="top-artist-list">
            <TopArtist/>
            <TopArtist/>
        </div>
    </div>
}