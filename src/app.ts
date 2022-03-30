import { httpListener } from '@marblejs/core';
import { logger$ } from '@marblejs/middleware-logger';
import { bodyParser$ } from '@marblejs/middleware-body';
import { api$ } from './api.effects';
import {webSocketListener} from "@marblejs/websockets";
import {helloEffects, mousemove$} from "./hello.effect";

const middlewares = [
    logger$(),
    bodyParser$(),
    // middleware3$
    // middleware4$
    // ...
];

const effects = [
    ...helloEffects
    // endpoint2$
    // endpoint3$
    // ...
];

export const listener = webSocketListener({
    effects,
});
