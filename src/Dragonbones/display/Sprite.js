var Sprite = (function (parent) {
    var Sprite = function (texture) {
        parent.call(this, texture);
    };

    Sprite.prototype = Object.create(parent.prototype);
    Sprite.prototype.constructor = Sprite;

    Sprite.prototype.updateTransform = function(matrix, transform)
    {
        var parentTransform = this.parent.worldTransform;
        var worldTransform = this.worldTransform;

        var px = this.pivot.x;
        var py = this.pivot.y;

        var a00 = this.scale.x * Math.cos(this.rotation + this.skewY),
            a01 = this.scale.y * Math.sin(-this.rotation - this.skewX),
            a10 = this.scale.x * Math.sin(this.rotation + this.skewY),
            a11 = this.scale.y * Math.cos(this.rotation + this.skewX),
            a02 = this.position.x - a00 * px - py * a01,
            a12 = this.position.y - a11 * py - px * a10,
            b00 = parentTransform.a, b01 = parentTransform.c,
            b10 = parentTransform.b, b11 = parentTransform.d;

        worldTransform.a = b00 * a00 + b01 * a10;
        worldTransform.c = b00 * a01 + b01 * a11;
        worldTransform.tx = b00 * a02 + b01 * a12 + parentTransform.tx;

        worldTransform.b = b10 * a00 + b11 * a10;
        worldTransform.d = b10 * a01 + b11 * a11;
        worldTransform.ty = b10 * a02 + b11 * a12 + parentTransform.ty;

        this.worldAlpha = this.alpha * this.parent.worldAlpha;
    };

    return Sprite;
})(PIXI.Sprite);

module.exports = Sprite;