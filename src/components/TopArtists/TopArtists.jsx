import TopArtist from "../TopArtist/TopArtist"
import "./TopArtists.css"
import { useSelector, useDispatch } from "react-redux"
import Loading from "../Loading/Loading"
import { useEffect } from "react"
import { topArtistsActions, topArtistsAsyncActions } from "../../slices/topArtistsSlice"


export default function TopArtists() {
    const dispatch = useDispatch()
    const { topArtists, currentFilter, isLoading } = useSelector(state => state.topArtists)

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

    useEffect(() => {
        console.log("useEffect > TopArtists")
        if (topArtists === null){
            dispatch(topArtistsAsyncActions.getUserTopArtistsMain())
        }
        // eslint-disable-next-line
    }, [])

    const drawFilter = (filter) => {
        let cls = filter.id === currentFilter ? "filter filter-selected" : "filter"
        return <p key={filter.id} className={cls} onClick={e => dispatch(topArtistsActions.setCurrentFilter(filter.id))}>{filter.title}</p>
    }

    const drawArtist = (artist) => <TopArtist key={artist.id} artist={artist} />

    return <div className="top-artists">
        {
            isLoading
            ? <Loading />
            : <div className="container">
                <div className="header">
                    <h3>Top Artists</h3>
                    <div className="filters">
                        {filters.map(drawFilter)}
                    </div>
                </div>

                <div className="top-artist-list">
                    {
                        topArtists.length === 0
                            ? <p> You don't have any top artists </p>
                            : topArtists.map(drawArtist)
                    }
                </div>
            </div>
        }
    </div>
}