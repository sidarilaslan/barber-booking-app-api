const express = require('express');
const helmet = require('helmet');
const config = require('./config');
const PORT = process.env.APP_PORT || 5000;
config();
const app = express();


app.use(express.json());
app.use(helmet());


app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
