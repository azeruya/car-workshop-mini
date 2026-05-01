const config = require('../config');

let jobs = [];

module.exports = {
    getAll: () => jobs,

    getById: (id) => {
        return jobs.find((job) => job.id === Number(id));
    },

    create: (data) => {
        const job = {
            id: jobs.length + 1,
            vehicleId: data.vehicleId,
            description: data.description,
            status: config.defaultJobStatus,
            createdAt: new Date().toISOString()
        };

        jobs.push(job);

        // TODO: link with vehicle status update later

        return job;
    },

    updateStatus: (id, status) => {
        const job = jobs.find((j) => j.id === Number(id));

        if (!job) {
            return null;
        }

        job.status = status;
        job.updatedAt = new Date().toISOString();

        return job;
    }
};