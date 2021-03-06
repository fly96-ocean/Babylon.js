module.exports = function (config) {
    'use strict';
    config.set({

        basePath: '../../',
        browserNoActivityTimeout: 1800000,

        urlRoot: '/karma',

        frameworks: ['mocha', 'chai', 'sinon'],

        files: [
            './Tools/DevLoader/BabylonLoader.js',
            './tests/validation/index.css',
            './tests/validation/integration.js',
            { pattern: 'dist/**/*', watched: false, included: false, served: true },
            { pattern: 'assets/**/*', watched: false, included: false, served: true },
            { pattern: 'tests/**/*', watched: false, included: false, served: true },
            { pattern: 'Playground/scenes/**/*', watched: false, included: false, served: true },
            { pattern: 'Playground/textures/**/*', watched: false, included: false, served: true },
            { pattern: 'Playground/sounds/**/*', watched: false, included: false, served: true },
            { pattern: 'Tools/DevLoader/**/*', watched: false, included: false, served: true },            
            { pattern: 'Tools/Gulp/config.json', watched: false, included: false, served: true },
        ],
        proxies: {
            '/': '/base/'
        },

        reporters: ['progress'],

        port: 1338,
        colors: true,
        autoWatch: false,
        singleRun: false,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        browsers: ['Chrome']

    });
};