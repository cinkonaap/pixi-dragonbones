var Resource = PIXI.loaders.Resource,
    async = PIXI.utils.async;

var SkeletonParser = function () {
    return function (resource, next) {
        if(resource.url.indexOf('_skeleton.json') < 0) {
            return next();
        }

        SkeletonParser.skeletons[resource.name] = resource.data;

        var atlasPath = resource.url.split('_skeleton.json')[0] + '_atlas.json';

        var atlasOptions = {
            crossOrigin: resource.crossOrigin,
            xhrType: Resource.XHR_RESPONSE_TYPE.JSON
        };
        
        this.add(resource.name + '_atlas', atlasPath, atlasOptions, function (res) {
            var data = this.data;

            SkeletonParser.atlases[this.name] = data;

            //var atlasImagesPaths = [ data.imagePath ];

            next();
        });
    }
};

SkeletonParser.skeletons = {};
SkeletonParser.atlases = {};

module.exports = SkeletonParser;