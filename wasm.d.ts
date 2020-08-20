/* tslint:disable */
/* eslint-disable */
/**
* @param {any} val
* @param {string} job
* @returns {any}
*/
export function return_all_combis(val: any, job: string): any;
/**
* @param {any} val
* @param {string} job
* @param {number} cost
* @returns {any}
*/
export function return_all_combis2(val: any, job: string, cost: number): any;
/**
* @returns {string}
*/
export function function_test(): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly return_all_combis: (a: number, b: number, c: number) => number;
  readonly return_all_combis2: (a: number, b: number, c: number, d: number) => number;
  readonly function_test: (a: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
        