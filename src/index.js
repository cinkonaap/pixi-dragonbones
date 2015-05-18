var DragonbonesRuntime = require('./DragonbonesRuntime/dragonBones'),
    Dragonbones = require('./Dragonbones');

Dragonbones.makeArmature = function (armatureName, skeletonJSON, atlasJson, texture) {
    var factory = new Dragonbones.factory.Factory();
    factory.addSkeletonData(DragonbonesRuntime.objects.DataParser.parseSkeletonData(skeletonJSON));
    factory.addTextureAtlas(new Dragonbones.textures.TextureAtlas(texture, atlasJson));

    var armature = factory.buildArmature(armatureName);

    DragonbonesRuntime.animation.WorldClock.clock.add(armature);

    return armature;
};

module.exports = PIXI.dragonbones = Dragonbones;


