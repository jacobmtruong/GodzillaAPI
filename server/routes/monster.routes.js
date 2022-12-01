const MonsterController = require('../controllers/monster.controller')

module.exports = (app) => {
    app.get('/api/monster', MonsterController.findAll);
    app.get('/api/monster/name/:name', MonsterController.findMonsterByName);
    app.get('/api/monster/year/:year', MonsterController.findMonsterByYearCreated);
    app.post('/api/monster', MonsterController.createMonster);
    app.put('/api/monster/:id', MonsterController.updateMonster);
    app.delete('/api/monster/:id', MonsterController.deleteMonster);
}