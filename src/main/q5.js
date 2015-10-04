module.exports = (f) => {
    return (a) => {
        return (b) => f(a, b);
    };
};