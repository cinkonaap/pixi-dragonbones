var packages = packages || {};

/** 
 * asserts 'package'-object existance
 *
 * @static
 *
 * @param {String} package
 * packageName
 * @return {Object}
 * creation asserted package object
**/
packages.packagify = function (package) {
    var currentObject = Function('return this')() || (42, eval)('this');
    
    var packageSplit = package.split('.');
    
    for( var i = 0 ; i < packageSplit.length ; i++ ) {
        currentObject[packageSplit[i]] = currentObject[packageSplit[i]] || {};
        currentObject = currentObject[packageSplit[i]];
    }
    
    return currentObject;
};