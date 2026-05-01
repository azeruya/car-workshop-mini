const Customer = require('../models/customerModel');
const { validateCustomer } = require('../utils/validator');
const response = require('../utils/response');

exports.getAll = (req, res) => {
    response.success(res, Customer.getAll());
};

exports.create = (req, res) => {
    const errors = validateCustomer(req.body);

    if (errors.length > 0) {
        return response.error(res, errors, 400);
    }

    const result = Customer.create(req.body);
    response.success(res, result, 201);
};