const express = require('express');
const router = express.Router();

const customer = require('./controllers/customerController');
const vehicle = require('./controllers/vehicleController');
const job = require('./controllers/jobController');

router.get('/customers', customer.getAll);
router.post('/customers', customer.create);

router.get('/vehicles', vehicle.getAll);
router.post('/vehicles', vehicle.create);

router.get('/jobs', job.getAll);
router.post('/jobs', job.create);
router.patch('/jobs/:id/status', job.updateStatus);

module.exports = router;