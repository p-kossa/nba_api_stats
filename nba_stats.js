const nba = require('nba.js').default;

var fs = require('fs');

// gets a list of dicts of team names and team ids
var get_teams =  nba.data.teams({ year: '2018' }).then(res => {
    fs.writeFileSync('teams.json', JSON.stringify(res, null, 2));

    raw_data = [];
    for (var i = 0; i < res.league.standard.length; i++) {
        if (res.league.standard[i].isNBAFranchise == true) {
            var dict = {
                teamName: res.league.standard[i].fullName,
                teamId: res.league.standard[i].teamId
            }
        }
        raw_data.push(dict);
    }
    let teams = [...new Set(raw_data)];
    return teams;

}).catch(err => console.error(err));

get_teams.then(function(result) {
    console.log(result)
})
