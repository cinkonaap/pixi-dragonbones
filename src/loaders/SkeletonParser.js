var Resource = PIXI.loaders.Resource,
    async = PIXI.utils.async;

var SkeletonParser = function () {
    return function (resource, next) {
        console.log(resource);
        var pureResourcePath = resource.url.split('_skeleton.json')[0];

        var atlasOptions = {
            crossOrigin: resource.crossOrigin,
            xhrType: Resource.XHR_RESPONSE_TYPE.JSON
        };

        this.add(pureResourcePath + '_atlas.json', pureResourcePath, atlasOptions, function (res) {
            var dragonbonesAtlasData = this.xhr.response;

            console.log(dragonbonesAtlasData);
        });
    }
};

module.exports = SkeletonParser;