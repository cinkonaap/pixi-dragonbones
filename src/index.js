var DragonbonesRuntime = require('./DragonbonesRuntime/dragonBones'),
    Dragonbones = require('./Dragonbones');

Dragonbones.makeArmature = function (armatureName, dataName) {
    var factory = new Dragonbones.factory.Factory();
    factory.addSkeletonData(DragonbonesRuntime.objects.DataParser.parseSkeletonData(Dragonbones.loaders.skeletonParser.skeletons[dataName]));

    var armature = factory.buildArmature(armatureName);

    DragonbonesRuntime.animation.WorldClock.clock.add(armature);

    return armature;
};

Dragonbones.loaders = require('./loaders');

module.exports = {
    runtime: DragonbonesRuntime,
    dragonbones: Dragonbones
};

PIXI.dragonbones = Dragonbones;
dragonBones = DragonbonesRuntime;


