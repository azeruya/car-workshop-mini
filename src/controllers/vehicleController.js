const Vehicle = require('../models/vehicleModel');

function getAll(req, res) {
    res.json(Vehicle.getAll());
}

function create(req, res) {
    const v = Vehicle.create(req.body);
    return res.json(v);
}

module.exports = { getAll, create };