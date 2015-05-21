var Sprite = (function (parent) {
    var Sprite = function (texture) {
        parent.call(this, texture);
    };

    Sprite.prototype = Object.create(parent.prototype);
    Sprite.prototype.constructor = Sprite;

    Sprite.prototype.updateTransform = function ()
    {
        parent.prototype.updateTransform.call(this);
    };

    return Sprite;
})(PIXI.Sprite);

module.exports = Sprite;