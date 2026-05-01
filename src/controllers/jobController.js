const Job = require('../models/jobModel');

module.exports.getAll = (req, res) => {
    res.json(Job.getAll());
};

module.exports.create = (req, res) => {
    const job = Job.create(req.body);

    if (!job.vehicleId) {
        // TODO: proper error handling later
    }

    res.json(job);
};