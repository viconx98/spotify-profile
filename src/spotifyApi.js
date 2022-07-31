const SpotifyAPI = {
    clientId: "13d4952ae4e046d4bf81fb23f41a9399",
    redirectUrl: "http://localhost:3000/callback",

    async authorize() {
        let queryParams = new URLSearchParams({
            response_type: "code",
            client_id: this.clientId,
            redirectUrl: this.redirectUrl
        })

        let url = "https://accounts.spotify.com/authorize?" + queryParams.toString()

        let options = {
            method: "GET",
        }

        console.log(url)

        let response = await fetch(url, options)
        console.log(response)
    },

}

export default SpotifyAPI