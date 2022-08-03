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
            id: 'long_term',
            title: "All time"
        },
        {
            id: "medium_term",
            title: "Last 6 Months"
        },
        {
            id: "short_term",
            title: "Last Month"
        }
    ]

    useEffect(() => {
        if (topArtists === null) {
            dispatch(topArtistsAsyncActions.getUserTopArtistsMain())
        }
        // eslint-disable-next-line
    }, [])

    const applyFilter = (filterId) => {
        dispatch(topArtistsAsyncActions.getUserTopArtistsMain(filterId))
        dispatch(topArtistsActions.setCurrentFilter(filterId))
    }

    const drawFilter = (filter) => {
        let cls = filter.id === currentFilter ? "filter filter-selected" : "filter"
        return <p key={filter.id} className={cls} onClick={e => applyFilter(filter.id)}>{filter.title}</p>
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

                    <div className="wrapper">
                        <div className="top-artist-list">
                            {
                                topArtists.length === 0
                                    ? <p> You don't have any top artists </p>
                                    : topArtists.map(drawArtist)
                            }
                        </div>
                    </div>
                </div>
        }
    </div>
}