var DragonbonesRuntime = require('../../DragonbonesRuntime/dragonBones');

var TextureAtlas = (function () {
    function TextureAtlas(image, textureAtlasRawData, scale) {
        if(typeof scale === "undefined") {
            scale = 1;
        }
        this._regions = {};

        this.image = image;
        this.scale = scale;

        this.parseData(textureAtlasRawData);
    };

    TextureAtlas.prototype.dispose = function() {
        this.image = null;
        this._regions = null;
    };

    TextureAtlas.prototype.getRegion = function(subTextureName) {
        return this._regions[subTextureName];
    };

    TextureAtlas.prototype.parseData = function(textureAtlasRawData) {
        var textureAtlasData = DragonbonesRuntime.objects.DataParser.parseTextureAtlasData(textureAtlasRawData, this.scale);
        this.name = textureAtlasData.__name;
        delete textureAtlasData.__name;

        for(var subTextureName in textureAtlasData) {
            this._regions[subTextureName] = textureAtlasData[subTextureName];
        }
    };
    return TextureAtlas;
})();

module.exports = TextureAtlas;
