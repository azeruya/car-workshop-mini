let vehicles = [];

module.exports = {
    getAll: () => vehicles,

    create: (data) => {
        const vehicle = {
            id: vehicles.length + 1,
            customerId: data.customerId,
            plateNumber: data.plateNumber
        };

        vehicles.push(vehicle);
        return vehicle;
    }
};