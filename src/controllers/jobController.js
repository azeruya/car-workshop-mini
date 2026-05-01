const Job = require('../models/jobModel');
const { validateJob } = require('../utils/validator');
const response = require('../utils/response');
const logger = require('../utils/logger');
const config = require('../config');

module.exports.getAll = (req, res) => {
    response.success(res, Job.getAll());
};

module.exports.create = (req, res) => {
    const errors = validateJob(req.body);

    if (errors.length > 0) {
        return response.error(res, errors, 400);
    }

    const job = Job.create(req.body);
    logger.log(`Created job ${job.id}`);

    return response.success(res, job, 201);
};

module.exports.updateStatus = (req, res) => {
    const { status } = req.body;

    if (!config.allowedJobStatuses.includes(status)) {
        return response.error(res, "Invalid job status", 400);
    }

    const job = Job.updateStatus(req.params.id, status);

    if (!job) {
        return response.error(res, "Job not found", 404);
    }

    logger.log(`Updated job ${job.id} status to ${status}`);

    return response.success(res, job);
};