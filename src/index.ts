import { fastify } from 'fastify';

const server = fastify();
const config = {
    port: 7000
};

const start = async () => {
    try {
        server.listen(config);
        console.log('Server started successfully');
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
