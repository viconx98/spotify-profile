const SpotifyAPI = {
    clientId: "13d4952ae4e046d4bf81fb23f41a9399",
    redirectUrl: "http://localhost:3000/callback",

    getAuthUrl() {
        let queryParams = new URLSearchParams({
            response_type: "token",
            client_id: this.clientId,
            redirect_uri: this.redirectUrl,
        })
        
        return "https://accounts.spotify.com/authorize?" + queryParams.toString()
    },

    me(accessToken, tokenType){
        let url = "https://api.spotify.com/v1/me"
        let headers = {
            Authorization: `${tokenType}: ${accessToken}`,
            "Content-Type": "'Content-Type: application/json'"
        }

        let options = {
            method: "GET",
            headers: headers
        }

        console.log(url)
        return fetch(url, options)
    }

}

export default SpotifyAPI