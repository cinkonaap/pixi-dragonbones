var Resource    = PIXI.loaders.Resource,
    async       = PIXI.utils.async;

var AtlasParser = function () {
    return function (resource, next) {
        if (!resource.data || !resource.isJson) {
            return next();
        }

        var atlasData = resource.data;

        var imagePath = resource.url.substr(0, resource.url.lastIndexOf('/') + 1) + atlasData.imagePath;

        var loadOptions = {
            crossOrigin: resource.crossOrigin,
            loadType: Resource.LOAD_TYPE.IMAGE
        };

        PIXI.utils.TextureCache.dragonbones = PIXI.TextureCache.dragonbones || {};
        PIXI.utils.TextureCache.dragonbones[atlasData.name] = {};

        this.add(resource.name + '_image', imagePath, loadOptions, function (res) {
            var frames = atlasData.SubTexture;

            var currentFrame;
            for( var i = 0 ; i < frames.length ; i++ ) {
                var currentFrame = frames[i];

                var size = new PIXI.math.Rectangle(currentFrame.x, currentFrame.y, currentFrame.width, currentFrame.height);

                PIXI.utils.TextureCache.dragonbones[atlasData.name][currentFrame.name] = new PIXI.Texture(res.texture.baseTexture, size, size.clone(), null, false);
            };

            next();
        });
    }
};

module.exports = AtlasParser;