const Customer = require('../src/models/customerModel');

test('create customer', () => {
    const customer = Customer.create({
        name: "Ali",
        phone: "0123456789"
    });

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("Ali");
});