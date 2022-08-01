const SpotifyAPI = {
    clientId: "13d4952ae4e046d4bf81fb23f41a9399",
    clientSecret: "f4b0e234543b45adb4ab479f6947cd1b",
    token: null,
    redirectUrl: "http://localhost:3000/callback",
    scopes: ["user-top-read", "user-follow-read", "playlist-read-collaborative", "playlist-read-private", "user-read-recently-played"],

    setToken(token) {
        this.token = token
    },

    authUrl() {
        let queryParams = new URLSearchParams({
            response_type: "code",
            client_id: this.clientId,
            redirect_uri: this.redirectUrl,
            scope: this.scopes.join(" ")
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

    me(){
        let url = "https://api.spotify.com/v1/me"
        let headers = {
            Authorization: `Bearer ${this.token.access_token}`,
            "Content-Type": "application/json'"
        }

        let options = {
            method: "GET",
            headers: headers
        }

        return fetch(url, options)
    },

    meFollowing(){
        let url = "https://api.spotify.com/v1/me/following?type=artist"
        let headers = {
            Authorization: `Bearer ${this.token.access_token}`,
            "Content-Type": "application/json'"
        }

        let options = {
            method: "GET",
            headers: headers
        }

        return fetch(url, options)
    },

    mePlaylists(){
        let url = "https://api.spotify.com/v1/me/playlists"
        let headers = {
            Authorization: `Bearer ${this.token.access_token}`,
            "Content-Type": "application/json'"
        }

        let options = {
            method: "GET",
            headers: headers
        }

        return fetch(url, options)
    },

    meTopArtists(){
        let url = "https://api.spotify.com/v1/me/top/artists"
        let headers = {
            Authorization: `Bearer ${this.token.access_token}`,
            "Content-Type": "application/json'"
        }

        let options = {
            method: "GET",
            headers: headers
        }

        return fetch(url, options)
    },

    meTopTracks(){
        let url = "https://api.spotify.com/v1/me/top/tracks"
        let headers = {
            Authorization: `Bearer ${this.token.access_token}`,
            "Content-Type": "application/json'"
        }

        let options = {
            method: "GET",
            headers: headers
        }

        return fetch(url, options)
    },

    topArtists(token){
        let ids = [
            "6eUKZXaKkcviH0Ku9w2n3V",
            "1Xyo4u8uXC1ZmMpatF05PJ",
            "1uNFoZAHBGtllmzznpCI3s",
            "6KImCVD70vtIoJWnq6nGn3",
            "6M2wZ9GZgrQXHCFfjv46we",
            "3TVXtAsR1Inumwj472S9r4",
            "4q3ewBCX7sLwd24euuV69X",
            "5cj0lLjcoR7YOSnhnX0Po5",
            "06HL4z0CvFAxyc27GXpf02",
            "7CajNmpbOovFoOoasH2HaY"
        ]
        let url = `https://api.spotify.com/v1/artists?ids=${ids.join(",")}`
        let headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json'"
        }

        let options = {
            method: "GET",
            headers: headers
        }

        return fetch(url, options)
    },

    topTracks(token){
        let ids = [
            "7qiZfU4dY1lWllzX7mPBI3",
            "0VjIjW4GlUZAMYd2vXMi3b",
            "2XU0oxnq2qxCpomAAuJY8K",
            "4OgwXdylh75fHfwUzJTUqg",
            "7qEHsqek33rTcFNT9PFqLf",
            "5ZKG94fnjiuMH5yrC5S9lS",
            "3KkXRkHbMCARz0aVfEt68P",
            "7BKLCZ1jbUBVqRi2FVlTVw",
            "0TK2YIli7K1leLovkQiNik",
            "0pqnGHJpmpxLKifKRmU6WP"
        ]
        let url = `https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`
        let headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json'"
        }

        let options = {
            method: "GET",
            headers: headers
        }

        return fetch(url, options)
    },

    recents(accessToken) {

    }



}

export default SpotifyAPI