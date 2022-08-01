const SpotifyAPI = {
    clientId: "13d4952ae4e046d4bf81fb23f41a9399",
    clientSecret: "7cc2294bf95e484bbd6647d119439e78",
    redirectUrl: "http://localhost:3000/callback",

    authUrl() {
        let queryParams = new URLSearchParams({
            response_type: "code",
            client_id: this.clientId,
            redirect_uri: this.redirectUrl,
        })

        return "https://accounts.spotify.com/authorize?" + queryParams.toString()
    },

    authorize(accessCode) {
        let body = new URLSearchParams({
            grant_type: "authorization_code",
            code: accessCode,
            redirect_uri: this.redirectUrl,
            client_id: this.clientId,
            client_secret: this.clientSecret
        })

        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "body": body.toString()
        }
        
        let url = "https://accounts.spotify.com/api/token"

        return fetch(url, options)
    },

    me(token){
        let url = "https://api.spotify.com/v1/me"
        let headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json'"
        }

        let options = {
            method: "GET",
            headers: headers
        }

        return fetch(url, options)
    }

}

export default SpotifyAPI