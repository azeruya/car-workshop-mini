let customers = [];

module.exports = {
    getAll: () => customers,

    create: (data) => {
        const newCustomer = {
            id: customers.length + 1,
            name: data.name,
            phone: data.phone
        };

        customers.push(newCustomer);
        return newCustomer;
    }
};