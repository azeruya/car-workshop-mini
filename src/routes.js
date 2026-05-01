const express = require('express');
const router = express.Router();

const customer = require('./controllers/customerController');
const vehicle = require('./controllers/vehicleController');
const job = require('./controllers/jobController');

// Customers
router.get('/customers', customer.getAll);
router.post('/customers', customer.create);

// Vehicles
router.get('/vehicles', vehicle.getAll);
router.post('/vehicles', vehicle.create);

// Jobs
router.get('/jobs', job.getAll);
router.post('/jobs', job.create);

module.exports = router;