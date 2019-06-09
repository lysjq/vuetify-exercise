const vuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
module.exports = {
    configureWebpack: {
        plugins: [
            new vuetifyLoaderPlugin()
        ]
    }
}