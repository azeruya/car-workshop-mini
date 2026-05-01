const Job = require('../src/models/jobModel');

test('create job', () => {
    const job = Job.create({
        vehicleId: 1,
        description: "Oil change"
    });

    expect(job.id).toBeDefined();
});

// TODO: add more tests later