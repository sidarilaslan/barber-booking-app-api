const express = require('express');
const helmet = require('helmet');
const config = require('./config');
const loaders = require('./loaders');

const PORT = process.env.APP_PORT || 5000;
const { userRouters } = require('./routers');

config();
loaders();

const app = express();
app.use(express.json());
app.use(helmet());
app.use("/user", userRouters);

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
