export const DEFAULT_NAME = "default";

const NONE = 0;
const NATIVE = 1;
const MICROSOFT = 2;
const MOZILLA = 3;
const GOOGLE = 4;
const SHIM = 5;
const MOCK = 6;

export class IMPLEMENTATION {
    static get NONE() {
        return NONE;
    }
    static get NATIVE() {
        return NATIVE;
    }
    static get MICROSOFT() {
        return MICROSOFT;
    }
    static get MOZILLA() {
        return MOZILLA;
    }
    static get GOOGLE() {
        return GOOGLE;
    }
    static get SHIM() {
        return SHIM;
    }
    static get MOCK() {
        return MOCK;
    }
}
