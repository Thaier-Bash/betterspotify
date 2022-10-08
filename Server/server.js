const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');

const app = express();

app.post('login', function(req, res) => {
    const spotifyApi = new spotifyWebApi ({
        redirectUri: 'https://localhost:3000',  
        clientId: '3c9a52343553448eb70e8d51efb98bfa'
        clientSecret: 'f9a30a19273b4b248c24db47475b359e'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }) .catch(()=> {
        res.sendStatus(400)
    })