var DragonbonesRuntime = require('../DragonbonesRuntime/dragonBones');

module.exports = {
    display: {
        Skeleton: require('./display/Skeleton')
    },
    loaders: {
        skeletonParser: require('./loaders/skeletonParser')
    },
    runtime: DragonbonesRuntime
};