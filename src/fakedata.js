
let fakeArtist = {
    "external_urls": {
        "spotify": "https://open.spotify.com/artist/0HSc7yUdNSosxRb2UJnXlz"
    },
    "followers": {
        "href": null,
        "total": 601536
    },
    "genres": [
        "german pop"
    ],
    "href": "https://api.spotify.com/v1/artists/0HSc7yUdNSosxRb2UJnXlz",
    "id": "0HSc7yUdNSosxRb2UJnXlz",
    "images": [
        {
            "height": 640,
            "url": "https://i.scdn.co/image/ab6761610000e5ebacc05f3d79885eb337e70e75",
            "width": 640
        },
        {
            "height": 320,
            "url": "https://i.scdn.co/image/ab67616100005174acc05f3d79885eb337e70e75",
            "width": 320
        },
        {
            "height": 160,
            "url": "https://i.scdn.co/image/ab6761610000f178acc05f3d79885eb337e70e75",
            "width": 160
        }
    ],
    "name": "Namika",
    "popularity": 53,
    "type": "artist",
    "uri": "spotify:artist:0HSc7yUdNSosxRb2UJnXlz"
}

export const fakeArtists = new Array(20).fill(JSON.parse(JSON.stringify(fakeArtist)))

let fakeTrack = {
    "album": {
        "album_type": "ALBUM",
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/7lZauDnRoAC3kmaYae2opv"
                },
                "href": "https://api.spotify.com/v1/artists/7lZauDnRoAC3kmaYae2opv",
                "id": "7lZauDnRoAC3kmaYae2opv",
                "name": "Dabin",
                "type": "artist",
                "uri": "spotify:artist:7lZauDnRoAC3kmaYae2opv"
            }
        ],
        "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
        ],
        "external_urls": {
            "spotify": "https://open.spotify.com/album/4zUW6lwQf3wHRdYawFEEWQ"
        },
        "href": "https://api.spotify.com/v1/albums/4zUW6lwQf3wHRdYawFEEWQ",
        "id": "4zUW6lwQf3wHRdYawFEEWQ",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273f6fb143505e59d45569bbc40",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02f6fb143505e59d45569bbc40",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851f6fb143505e59d45569bbc40",
                "width": 64
            }
        ],
        "name": "Between Broken",
        "release_date": "2021-10-15",
        "release_date_precision": "day",
        "total_tracks": 13,
        "type": "album",
        "uri": "spotify:album:4zUW6lwQf3wHRdYawFEEWQ"
    },
    "artists": [
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/7lZauDnRoAC3kmaYae2opv"
            },
            "href": "https://api.spotify.com/v1/artists/7lZauDnRoAC3kmaYae2opv",
            "id": "7lZauDnRoAC3kmaYae2opv",
            "name": "Dabin",
            "type": "artist",
            "uri": "spotify:artist:7lZauDnRoAC3kmaYae2opv"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/41DKMtAnhVo7aDeluAHDJg"
            },
            "href": "https://api.spotify.com/v1/artists/41DKMtAnhVo7aDeluAHDJg",
            "id": "41DKMtAnhVo7aDeluAHDJg",
            "name": "MYRNE",
            "type": "artist",
            "uri": "spotify:artist:41DKMtAnhVo7aDeluAHDJg"
        }
    ],
    "available_markets": [
        "AD",
        "AE",
        "AR",
        "AT",
        "AU",
        "BE",
        "BG",
        "BH",
        "BO",
        "BR",
        "CA",
        "CH",
        "CL",
        "CO",
        "CR",
        "CY",
        "CZ",
        "DE",
        "DK",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FR",
        "GB",
        "GR",
        "GT",
        "HK",
        "HN",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IS",
        "IT",
        "JO",
        "JP",
        "KW",
        "LB",
        "LI",
        "LT",
        "LU",
        "LV",
        "MA",
        "MC",
        "MT",
        "MX",
        "MY",
        "NI",
        "NL",
        "NO",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PH",
        "PL",
        "PS",
        "PT",
        "PY",
        "QA",
        "RO",
        "SA",
        "SE",
        "SG",
        "SK",
        "SV",
        "TH",
        "TN",
        "TR",
        "TW",
        "US",
        "UY",
        "VN",
        "ZA"
    ],
    "disc_number": 1,
    "duration_ms": 196738,
    "explicit": false,
    "external_ids": {
        "isrc": "USA2P2138064"
    },
    "external_urls": {
        "spotify": "https://open.spotify.com/track/1zTH51dGFgmP4CeNa3cFFr"
    },
    "href": "https://api.spotify.com/v1/tracks/1zTH51dGFgmP4CeNa3cFFr",
    "id": "1zTH51dGFgmP4CeNa3cFFr",
    "is_local": false,
    "name": "Again",
    "popularity": 39,
    "preview_url": "https://p.scdn.co/mp3-preview/94310daab69166b191ad8f9fbcd7999c81cf338a?cid=13d4952ae4e046d4bf81fb23f41a9399",
    "track_number": 4,
    "type": "track",
    "uri": "spotify:track:1zTH51dGFgmP4CeNa3cFFr"
}

export const fakeTracks = new Array(10).fill(JSON.parse(JSON.stringify(fakeTrack)))


let fakePlaylist = {
    "collaborative": false,
    "description": "",
    "external_urls": {
        "spotify": "https://open.spotify.com/playlist/6LtsXS3GY0TKfWx819mwkZ"
    },
    "href": "https://api.spotify.com/v1/playlists/6LtsXS3GY0TKfWx819mwkZ",
    "id": "6LtsXS3GY0TKfWx819mwkZ",
    "images": [
        {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273b3d81f39b58946abfe8ea1cf",
            "width": 640
        }
    ],
    "name": "Test 2",
    "owner": {
        "display_name": "SuperLiminal",
        "external_urls": {
            "spotify": "https://open.spotify.com/user/315kpvd7zc4ff3mzb6sexvta27sq"
        },
        "href": "https://api.spotify.com/v1/users/315kpvd7zc4ff3mzb6sexvta27sq",
        "id": "315kpvd7zc4ff3mzb6sexvta27sq",
        "type": "user",
        "uri": "spotify:user:315kpvd7zc4ff3mzb6sexvta27sq"
    },
    "primary_color": null,
    "public": false,
    "snapshot_id": "NSxmY2I3Y2NlZWFlNDE3OGIxMmNkNjdjNTAzNmJkZmUxMGUxYWNjOGE4",
    "tracks": {
        "href": "https://api.spotify.com/v1/playlists/6LtsXS3GY0TKfWx819mwkZ/tracks",
        "total": 3
    },
    "type": "playlist",
    "uri": "spotify:playlist:6LtsXS3GY0TKfWx819mwkZ"
}

export const fakePlaylists = new Array(10).fill(JSON.parse(JSON.stringify(fakePlaylist)))
