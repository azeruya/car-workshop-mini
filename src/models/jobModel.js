let jobs = [];

module.exports = {
    getAll: () => jobs,

    create: (data) => {
        const job = {
            id: jobs.length + 1,
            vehicleId: data.vehicleId,
            description: data.description,
            status: "pending"
        };

        jobs.push(job);

        // TODO: link with vehicle status update later

        return job;
    }
};