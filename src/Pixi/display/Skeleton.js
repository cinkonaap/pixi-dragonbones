var Dragonbones = require('../../Dragonbones'),
    DragonbonesRuntime = require('../../DragonbonesRuntime/dragonBones'),
    skeletonParser = require('../loaders/skeletonParser');

var Skeleton = (function () {
    var Skeleton = function () {
        this._factory = undefined;
        this._armature = undefined;
        //this._display = undefined;
    };

    Skeleton.makeArmature = function (armatureName, dataName) {
        var skeleton = new Skeleton();

        skeleton._factory = new Dragonbones.factory.Factory();
        skeleton._factory.addSkeletonData(DragonbonesRuntime.objects.DataParser.parseSkeletonData(skeletonParser.skeletons[dataName]));

        skeleton._armature = skeleton._factory.buildArmature(armatureName);

        DragonbonesRuntime.animation.WorldClock.clock.add(skeleton._armature);

        return skeleton;
    };

    Skeleton.prototype.dispose = function () {};

    Object.defineProperties(Skeleton.prototype, {
        armature: {
            get: function () {
                return this._armature;
            }
        },
        display: {
            get: function () {
                return this._armature.getDisplay();
            }
        },
        factory: {
            get: function () {
                return this._factory;
            }
        }
    });

    return Skeleton;
})();

module.exports = Skeleton;
