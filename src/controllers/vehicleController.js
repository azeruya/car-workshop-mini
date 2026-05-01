const Vehicle = require('../models/vehicleModel');
const { validateVehicle } = require('../utils/validator');
const response = require('../utils/response');

function getAll(req, res) {
    response.success(res, Vehicle.getAll());
}

function create(req, res) {
    const errors = validateVehicle(req.body);

    if (errors.length > 0) {
        return response.error(res, errors, 400);
    }

    const v = Vehicle.create(req.body);
    return response.success(res, v, 201);
}

module.exports = { getAll, create };