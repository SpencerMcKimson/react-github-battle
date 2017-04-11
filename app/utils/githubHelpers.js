var axios = require('axios');

var id ="4221fa6e64df798690c5";
var sec = "07badab5cfce42147536d593791647e910e27778";
var param = "?client_id=" + id + "?client_secret=" + sec;

function getUserInfo (username) {
    return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
    getPlayersInfo: function (players) {
        return axios.all(players.map(function (username) {
            return getUserInfo(username);
        })).then(function (info) {
            return info.map(function (user) {
                return user.data;
            });
        }).catch(function (err) {
            console.warn('Error in getPlayersInfo', err);
        });
    }
};

module.exports = helpers;