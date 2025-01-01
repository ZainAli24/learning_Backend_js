require('dotenv').config()

const express = require('express');
const app = express()

const port = 4000

Github_Data =  {
    "login": "ZainAli24",
    "id": 163526946,
    "node_id": "U_kgDOCb85Ig",
    "avatar_url": "https://avatars.githubusercontent.com/u/163526946?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ZainAli24",
    "html_url": "https://github.com/ZainAli24",
    "followers_url": "https://api.github.com/users/ZainAli24/followers",
    "following_url": "https://api.github.com/users/ZainAli24/following{/other_user}",
    "gists_url": "https://api.github.com/users/ZainAli24/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ZainAli24/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ZainAli24/subscriptions",
    "organizations_url": "https://api.github.com/users/ZainAli24/orgs",
    "repos_url": "https://api.github.com/users/ZainAli24/repos",
    "events_url": "https://api.github.com/users/ZainAli24/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ZainAli24/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-03-15T10:45:16Z",
    "updated_at": "2024-12-26T05:55:45Z"
  }

app.get('/' , (req , res) => {
    res.send("Hello ZAINs its your main-page !")
})

app.get('/instagrame' , (req , res) => {
    res.send("<b><i>Hello intagrame page</i></b>")
})

app.get('/login' , (req , res) => {
    res.send('<h1>Please Login before doing something</h1>')
})

app.get('/youtube' , (req , res) => {
    res.send("<h1>Well come in youtube!</h1>")
})

app.get('/ZainPortfolio' , (req , res) => {
    res.send("<h1><b>THis is Your APP Developer Portfolio page .</b></h>")
})

app.get('/github' , (req , res) => {
    res.json(Github_Data)
})

app.listen(process.env.PORT ,  () => {
    console.log(`Hey Zain, Your app listening on port ${port} `);
})
