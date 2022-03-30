import { matchEvent } from '@marblejs/core';
import { WsEffect } from '@marblejs/websockets';
import {concatMap, tap} from 'rxjs/operators';
import { of} from "rxjs";

const clients: string[] = [];

export const mousemove$: WsEffect = event$ =>
    event$.pipe(
        matchEvent('MOVE'),
        tap(e => console.log('clients', clients)),
        concatMap(e => of({ type: 'MOVE', payload:  e})),
    );



export const helloEffects = [mousemove$]

// https://stackblitz.com/edit/ng-websocket?file=src/app/app.component.ts
