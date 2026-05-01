const express = require('express');
const routes = require('./routes');

const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api', routes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});