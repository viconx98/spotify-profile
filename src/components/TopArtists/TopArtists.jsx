import TopArtist from "../TopArtist/TopArtist"
import "./TopArtists.css"
import { useSelector, useDispatch } from "react-redux"
import { setCurrentFilter, setTopArtists, setIsLoading } from "../../slices/topArtistsSlice"
import Loading from "../Loading/Loading"
import { useEffect } from "react"
import SpotifyAPI from "../../spotifyApi"

export default function TopArtists() {
    const dispatch = useDispatch()
    let { access_token: accessToken } = useSelector(state => state.auth.token)
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

    const loadTopArtists = async () => {
        let response = await SpotifyAPI.topArtists(accessToken)
        let responseJson = await response.json()

        console.log(responseJson)
        dispatch(setTopArtists(responseJson.artists))
        dispatch(setIsLoading(false))
    }

    useEffect(() => {
        setTimeout(loadTopArtists, 2000)
    }, [])

    const drawFilter = (filter) => {
        let cls = filter.id === currentFilter ? "filter filter-selected" : "filter"
        return <p className={cls} onClick={e => dispatch(setCurrentFilter(filter.id))}>{filter.title}</p>
    }

    const drawArtist = (artist) => <TopArtist key={artist.id} artist={artist}/>

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
                    {topArtists.map(drawArtist)}
                </div>
            </div>
        }
    </div>
}