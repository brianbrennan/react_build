module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    const webpackConfig = require('./webpack.config');

    grunt.initConfig({

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')
                ]
            },
            dist: {
                src: 'dist/*.css'
            }
        },
        less: {
            dist: {
                src: 'app/globals/less/styles.less',
                dest: 'dist/styles.css'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            less: {
                files: './app/**/*.less',
                tasks: ['less:dist']
            },
            webpack: {
                files: ['./app/**/*.jsx', './app/**/*.js'],
                tasks: ['webpack:dist']
            }
        },
        webpack: {
            dist: webpackConfig
        }
    });

    grunt.registerTask('build', ['webpack:dist', 'less:dist', 'postcss:dist']);
    grunt.registerTask('devWatch', ['webpack:dist', 'less:dist', 'postcss:dist', 'watch'])
};