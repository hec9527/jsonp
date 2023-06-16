let count = 0;
const enc = encodeURIComponent;
const doc = document;

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

function jsonp<T extends unknown = unknown>(url: string, opts: JsonpOption, fn: CallBackType<T>): AnyFunction;
function jsonp<T extends unknown = unknown>(url: string, fn: CallBackType<T>): AnyFunction;
function jsonp<T extends unknown = unknown>(url: string, opts: CallBackType<T> | JsonpOption, fn?: CallBackType<T>) {
    if (typeof opts === 'function') {
        fn = opts as CallBackType<T>;
        opts = {};
    }
    if (!opts) opts = {};

    const prefix = opts.prefix || '__jp';
    const id = opts.name || prefix + count++;
    const param = opts.param || 'callback';
    const timeout = opts.timeout ?? 60000;
    const target = doc.getElementsByTagName('script')[0] || doc.head;
    const script = doc.createElement('script');
    let timer: number | undefined;

    if (timeout) {
        timer = setTimeout(() => {
            cleanup();
            if (fn) fn(new Error('Timeout'));
        }, timeout);
    }

    function cleanup() {
        if (script.parentNode) script.parentNode.removeChild(script);
        delete window[id];
        if (timer) {
            clearTimeout(timer);
            timer = undefined;
        }
    }

    function cancel() {
        if (window[id]) {
            cleanup();
        }
    }

    window[id] = function (data: AnyObject) {
        cleanup();
        if (fn) fn(null, data);
    };

    url += `${(~url.indexOf('?') ? '&' : '?') + parseParam({ ...opts.data, [param]: enc(id) })}`;
    url = url.replace('?&', '?');

    script.src = url;
    script.onerror = function () {
        cleanup();
        if (fn) fn(new Error('Failure'));
    };
    target.parentNode?.insertBefore(script, target);

    return cancel;
}

function parseParam(data: AnyObject) {
    const search: string[] = [];
    const pushValue = (data: string) => (data ? `=${data}` : '');
    for (const p in data) {
        if (data[p] === undefined) continue;
        try {
            search.push(enc(p) + pushValue(enc(data[p])));
        } catch (e) {
            search.push(p + pushValue(data[p]));
        }
    }
    return search.join('&');
}

export default jsonp;
