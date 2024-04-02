const extendWebpack = require('piral-ng/extend-webpack');

module.exports = (config) => {
    return extendWebpack({
        ngOptions: {
            jitMode: false,
        },
    })(config);
};
