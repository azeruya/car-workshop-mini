module.exports = {
    port: process.env.PORT || 3000,
    defaultJobStatus: "pending",
    allowedJobStatuses: ["pending", "in_progress", "completed", "cancelled"]
};