Function.prototype._apply = function (caller, args) {
    if (!caller) {
        caller = window;
    }
    caller._func = this;
    let result = caller._func(...args);
    delete caller._func;
    return result;
}

Function.prototype._call = function (caller, ...args) {
    if (!caller) {
        caller = window;
    }
    caller._func = this;
    let result = caller._func(...args);
    delete caller._func;
    return result;
}

Function.prototype._bind = function (caller, ...args) {
    caller._func = this;
    return function (...newArgs) {
        let result = caller._func(...[...args, ...newArgs]);
        delete caller._func;
        return result;
    }
}
