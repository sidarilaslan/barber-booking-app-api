const express = require('express');
const helmet = require('helmet');
const config = require('./config');
const loaders = require('./loaders');
const cors = require('cors');

const PORT = process.env.APP_PORT || 5000;
const { userRouters, workerRouters, bookingRouters, serviceRouters } = require('./routers');

config();
loaders();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/user", userRouters);
app.use("/worker", workerRouters);
app.use("/booking", bookingRouters);
app.use("/service", serviceRouters);





app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
