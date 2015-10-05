module.exports = (fn, arg) => {
    return (a) => {
        return fn(arg, a);
    };
};