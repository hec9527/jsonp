export type JsonpOption = {
    prefix?: string;
    name?: string;
    param?: string;
    timeout?: number;
    data?: AnyObject;
};
export type AnyObject = {
    [K in string | symbol | number]: any;
};
export type AnyFunction = (...args: any[]) => any;
export type CallBackType<T extends unknown> = (error: null | Error, data?: T) => void;
declare function jsonp<T extends unknown = unknown>(url: string, opts: JsonpOption, fn: CallBackType<T>): AnyFunction;
declare function jsonp<T extends unknown = unknown>(url: string, fn: CallBackType<T>): AnyFunction;
export default jsonp;
