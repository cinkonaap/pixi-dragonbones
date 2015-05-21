/**
 * create and returns require functions for each relative path you want to use in your code
 * @param {dictionary} relatives Hash is relative key, value is relative path
 * @returns {dictionary} functions for relative require
 */
module.exports = function rrequire(relatives) {
    var rrequires = {},
        key;

    for (key in relatives) {
        if (relatives.hasOwnProperty(key)) {
            rrequires[key] = createRelativeRequire(relatives[key]);
        }
    }

    return rrequires;
};

var createRelativeRequire = function (relative) {
    return function (path) {
        return require(relative + '/' + path);
    };
};