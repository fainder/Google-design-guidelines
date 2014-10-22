var getArg = function() {
    var arg = Array.prototype.slice.call(arguments, 2);
    return arg;
};
getArg(1, 2, 3)
