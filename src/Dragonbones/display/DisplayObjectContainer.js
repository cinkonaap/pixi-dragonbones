var DisplayObjectContainer = (function (parent) {
    var DisplayObjectContainer = function () {
        parent.call(this);
    };

    DisplayObjectContainer.prototype = Object.create(parent.prototype);
    DisplayObjectContainer.prototype.constructor = DisplayObjectContainer;

    DisplayObjectContainer.prototype.updateTransform = function()
    {
        parent.prototype.updateTransform.call(this);
    };

    return DisplayObjectContainer;
})(PIXI.Container);

module.exports = DisplayObjectContainer;