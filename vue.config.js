const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
    publicPath: "/mdme",
    transpileDependencies: [
        'vuetify',
        '@koumoul/vjsf'
    ],
    pluginOptions: {
        i18n: {
            locale: "en",
            fallbackLocale: "fr",
            localeDir: "locales",
            enableInSFC: true,
            includeLocales: false,
            enableBridge: true
        }
    },

    configureWebpack: {
        plugins: [new NodePolyfillPlugin()]
    }
}
