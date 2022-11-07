// Bring in monster model
const Monster = require('../models/monster.model');

module.exports = {

    // Read ALL
    findAll: (req, res) => {
        Monster.find()
            .then(allMonsters => res.json(allMonsters))
            .catch(err => res.json({ message: 'There was an error', serverError: err }))
    },

    // Create a new monster
    createMonster: (req, res) => {
        Monster.create(req.body)
            .then(newMonster => res.json(newMonster))
            .catch(err => res.json({ message: 'There was an error', serverError: err }))
    },

    // find ONE by ID
    findMonsterByID: (req, res) => {
        Monster.findById(req.params.id)
            .then(monster => res.json(monster))
            .catch(err => res.json({ message: 'There was an error', serverError: err }))
    },

    // find Monster by name
    findMonsterByName: (req, res) => {
        Monster.find({name: req.params.name})
        .then(monsterWithName => res.json(monsterWithName))
        .catch(err => res.json({ message: 'There was an error', serverError: err }))
    },

    //update a monster
    updateMonster: (req, res) => {
        Monster.findByIdAndUpdate(req.params.id, red.body, { new: true, runValidators: true })
            .then(updatedMonster => res.json(updatedMonster))
            .catch(err => res.json({ message: 'There was an error', serverError: err }))
    },

    // delete a monster
    deleteMonster: (req, res) => {
        Monster.findByIdAndDelete(req.params.id)
        .then(deleteConfirme => res.json(deleteConfirme))
        .catch(err => res.json({ message: 'There was an error', serverError: err }))
    }
}