const axios = require('axios')

const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const param = `?client_id=${id}&client_secret=${sec}`

const getUserInfo = username => axios.get(`http://api.github.com/users/${username}${param}`)


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
  }
};

module.exports = helpers;
