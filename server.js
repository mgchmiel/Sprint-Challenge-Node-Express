const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('cors');
const actionRouter = require('./routers/actionRouter.js');
const projectRouter = require('./routers/projectRouter.js');
const server = express();
const port = 5000;

const logger = (req, res) => {
    console.log(`Requested URL: ${req.url}`);
    console.log(`Request Info: ${req.body}`);
}


server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

server.listen(port, () => console.log(`API Is Running, Running on Port:${port}`));