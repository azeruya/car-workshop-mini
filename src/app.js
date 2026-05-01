const express = require('express');
const routes = require('./routes');
const config = require('./config');

const app = express();

app.use(express.json());

app.use('/api', routes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: "Route not found"
    });
});

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});