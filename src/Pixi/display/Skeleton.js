var Dragonbones = require('../../Dragonbones'),
    DragonbonesRuntime = require('../../DragonbonesRuntime/dragonBones'),
    skeletonParser = require('../loaders/skeletonParser');

var Skeleton = (function () {
    var Skeleton = function () {
        this._factory = undefined;
        this._armature = undefined;
        this._display = undefined;
    };

    Skeleton.makeArmature = function (armatureName, dataName) {
        var skeleton = new Skeleton();

        skeleton._factory = new Dragonbones.factory.Factory();
        skeleton._factory.addSkeletonData(DragonbonesRuntime.objects.DataParser.parseSkeletonData(skeletonParser.skeletons[dataName]));

        skeleton._armature = skeleton._factory.buildArmature(armatureName);

        DragonbonesRuntime.animation.WorldClock.clock.add(skeleton._armature);

        skeleton._display = skeleton._armature.getDisplay();

        return skeleton;
    };

    Object.defineProperties(Skeleton.prototype, {
        animation: {
            get: function () {
                return this._armature.animation;
            }
        },
        display: {
            get: function () {
                return this._display;
            }
        }
    });

    return Skeleton;
})();

module.exports = Skeleton;
