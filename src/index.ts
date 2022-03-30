import { createServer } from '@marblejs/core';
import { IO } from 'fp-ts/lib/IO';
import { listener } from './app';
import {createWebSocketServer} from "@marblejs/websockets";

const server = createWebSocketServer({
    options: {
        port: 1337,
        host: '127.0.0.1',
    },
    listener,
});

const main: IO<void> = async () =>
    await (await server)();

main();
