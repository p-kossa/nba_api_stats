const nba = require('nba.js').default;

var fs = require('fs')

nba.data.standings({ date: 'current' }, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }

    fs.writeFileSync('data.json', JSON.stringify(res, null, 2));

    for (var i = 0; i < res.league.standard.teams.length; i++){
        console.log(res.league.standard.teams[i].teamId)
    }
});

nba.data.teams({ year: '2018' }, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }

    fs.writeFileSync('teams.json', JSON.stringify(res, null, 2));
})
