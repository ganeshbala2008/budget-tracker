import { fastify } from 'fastify';
import 'dotenv/config'

const server = fastify();
const Port = 7000;

const start = async () => {
    try {
        server.listen(Port);
        console.log('Server started successfully');
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();