const Customer = require('../models/customerModel');

exports.getAll = (req, res) => {
    res.json(Customer.getAll());
};

exports.create = (req, res) => {
    const result = Customer.create(req.body);
    res.json(result);
};