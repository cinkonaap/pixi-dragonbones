var DragonbonesRuntime      = require('../../DragonbonesRuntime/dragonBones'),
    DisplayBridge           = require('../display/DisplayBridge'),
    Sprite                  = require('../display/Sprite');
    DisplayObjectContainer  = require('../display/DisplayObjectContainer');

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Factory = (function (_super) {
    __extends(Factory, _super);

    function Factory() {
        _super.call(this);
    };

    Factory.prototype._generateArmature = function() {
        var armature = new DragonbonesRuntime.Armature(new DisplayObjectContainer());
        return armature;
    };

    Factory.prototype._generateSlot = function() {
        var slot = new DragonbonesRuntime.Slot(new DisplayBridge());
        return slot;
    };

    Factory.prototype.getTextureDisplay = function (fullName, pivotX, pivotY) {
        if (isNaN(pivotX) || isNaN(pivotY)) {
            var data = this._dataDic[this._currentDataName];
            if (data) {
                var pivot = data.getSubTexturePivot(fullName);
                if (pivot) {
                    pivotX = pivot.x;
                    pivotY = pivot.y;
                }
            }
        }

        return this._generateDisplay(fullName, pivotX, pivotY);
    };

    Factory.prototype._generateDisplay = function(fullName, pivotX, pivotY) {
        var image = new Sprite(PIXI.utils.TextureCache.dragonbones[this._currentDataName][fullName]);
        image.pivot.x = pivotX;
        image.pivot.y = pivotY;

        return image;
    };

    return Factory;
})(DragonbonesRuntime.factorys.BaseFactory);

module.exports = Factory;