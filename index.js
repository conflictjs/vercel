import { kv } from '@vercel/kv';

export function build () {

}

export async function getState (key) {
    return await kv.get(key);
}

export async function setState (key, value) {
    return await kv.set(key, value);
}

export async function getStateHash (hash, key) {
    return await kv.hget(hash, key);
}

export async function setStateHash (hash, value) {
    return await kv.hset(hash, value);
}