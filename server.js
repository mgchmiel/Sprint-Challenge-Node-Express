const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('cors');
const actionRouter = require('./actions/actionRouter.js');
const projectRouter = require('./projects/projectRouter.js');
const server = express();
const port = 5000;

const logger = (req, res, next) => {
    console.log(`Requested URL: ${req.url}`);
    console.log(`Request Info: ${req.body}`);
    next();
}


server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

server.listen(port, () => console.log(`API Is Running Running on Port:${port}`));