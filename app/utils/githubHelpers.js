const axios = require('axios')

const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const param = `?client_id=${id}&client_secret=${sec}`

const getUserInfo = username => axios.get(`http://api.github.com/users/${username}${param}`)

const getRepos = username => {
  return axios.get(`http://api.github.com/users/${username}/repos${param}&per_page=100`)
}

const getTotalStars = repos => {
  return repos.data.reduce(function(prev, current) {
    return prev + current.stargazers_count
  }, 0)
}

const getPlayersData = player => {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function(totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

const calculateScores = players => {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

const helpers = {
  getPlayersInfo(players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username)
    })).then(function(info) {
      return info.map(function (user) {
        return user.data;
      })
    }).catch(function(err) {
      console.warn('Error in getPlayersInfo', err)
    })
  },
  battle(players) {
    const playerOneData = getPlayersData(players[0]);
    const playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function (err) {console.warn('Error in getPlayersInfo', err)})
  }
};



module.exports = helpers;
