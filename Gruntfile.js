module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        'pkg': grunt.file.readJSON('package.json'),

        'meta': {
            'jsFilesForTesting': [
        'bower_components/jquery/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/restangular/dist/restangular.js',
        'bower_components/underscore/underscore.js',
        'test/**/*Spec.js'
      ]
        },

        'karma': {
            'development': {
                'configFile': 'karma.conf.js',
                'options': {
                    'files': [
            '<%= meta.jsFilesForTesting %>',
            'source/**/*.js'
          ],
                }
            },
            'dist': {
                'options': {
                    'configFile': 'karma.conf.js',
                    'files': [
            '<%= meta.jsFilesForTesting %>',
            'dist/<%= pkg.namelower %>-<%= pkg.version %>.js'
          ],
                }
            },
            'minified': {
                'options': {
                    'configFile': 'karma.conf.js',
                    'files': [
            '<%= meta.jsFilesForTesting %>',
            'dist/<%= pkg.namelower %>-<%= pkg.version %>.min.js'
          ],
                }
            }
        },

        'jshint': {
            'beforeconcat': ['source/**/*.js'],
        },

        'concat': {
            'dist': {
                'src': ["../bower_components/bootstrap/dist/js/bootstrap.js", // All Dev dependencies 
                "../bower_components/underscore/underscore.js", // All Dev dependencies 
                "../bower_components/jquery/jquery.js", // All Dev dependencies 
                "../bower_components/angular/angular.js", // All Dev dependencies 
                "../bower_components/angular-route/angular-route.js", // All Dev dependencies 
                "../bower_components/angular-local-storage/angular-local-storage.js", // All Dev dependencies 
                'source/**/*.js' // All JS in the libs folder
               ],
                'dest': 'dist/js/app.js'
            }
        },

        'uglify': {
            'options': {
                'mangle': false
            },
            'dist': {
                'files': {
                    'dist/js/app.min.js': ['dist/js/app.js']
                }
            }
        },

        'jsdoc': {
            'src': ['source/**/*.js'],
            'options': {
                'destination': 'doc'
            }
        },

        // compile less stylesheets to css -------------------------------
        'less': {
            build: {
                files: {
                    'dist/css/default.css': 'source/less/default.less'
                }
            }
        },
        // configure cssmin to minify css files --------------------------
        'cssmin': { //TODO ensure bootstrap.css is included
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'dist/css/style.min.css': 'source/css/style.css'
                }
            }
        },
        // watch stylesheets and scripts----------------------------------
        'watch': {
            options: {
                livereload: true,
            },
            stylesheets: {
                files: ['source//*.css', 'source//*.less'],
                tasks: ['less', 'cssmin']
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            }
        }
    });

    grunt.registerTask('test', ['karma:development']);
    grunt.registerTask('build', [
      'jshint',
      'karma:development',
      'concat',
      'karma:dist',
      'uglify',
      'karma:minified',
      'jsdoc'
    ]);

};