function requiredFields(data, fields) {
    const errors = [];

    fields.forEach((field) => {
        if (!data[field]) {
            errors.push(`${field} is required`);
        }
    });

    return errors;
}

function validateCustomer(data) {
    return requiredFields(data, ["name", "phone"]);
}

function validateVehicle(data) {
    return requiredFields(data, ["customerId", "plateNumber"]);
}

function validateJob(data) {
    return requiredFields(data, ["vehicleId", "description"]);
}

module.exports = {
    validateCustomer,
    validateVehicle,
    validateJob
};