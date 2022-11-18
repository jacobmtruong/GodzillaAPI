const MonsterController = require('../controllers/monster.controller')

module.exports = (app) => {
    app.get('/api/monsters', MonsterController.findAll);
    app.get('/api/monsters/:name', MonsterController.findMonsterByName);
    app.post('/api/monsters', MonsterController.createMonster);
    app.put('/api/monsters/:id', MonsterController.updateMonster);
    app.delete('/api/monsters/:id', MonsterController.deleteMonster);
}