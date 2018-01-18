/**
 * Created by andre on 01/09/16.
 */

module.exports = function(grunt){

	var globalConfig = {
		dev: '../backend/public',
		dist: '../dist/public'
	};

	require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

	grunt.initConfig({

		globalConfig: globalConfig,

		watch: {
			wiredep: {
				files: ['geoJsons/*', 'bower_components/*', 'images/**/*'],
				tasks: ['copy:dev', 'wiredep:dev'],
				options: {
					spawn: false,
					livereload: 35800
				}
			},
			less: {
				files: ['styles/**/*.less'],
				tasks: ['less:dev', 'includeSource:dev'],
				options: {
					spawn: false,
					livereload: 35800
				}
			},
			js: {
				files: ['scripts/**/*.js'],
				tasks: ['jshint:all', 'newer:uglify:dev', 'newer:ngAnnotate:dev', 'newer:includeSource:dev'],
				options: {
					spawn: true,
					interrupt: true,
					livereload: 35800
				}
			},
			pug: {
				files: ['layouts/**/*.pug'],
				tasks: ['pug:dev', 'newer:includeSource:dev', 'wiredep:dev'],
				options: {
					spawn: false,
					livereload: 35800
				}
			}
		},

		less: {
			dev: {
				files: [{
					cwd: 'styles',
					src: '**/*.less',
					dest: '<%= globalConfig.dev %>/css',
					expand: true,
					ext: '.css'
				}]
			},
			prod: {
				options: {
					compress : true
				},
				files: [{
					cwd: 'styles',
					src: '**/*.less',
					dest: '<%= globalConfig.dist %>/css',
					expand: true,
					ext: '.css'
				}]
			}
		},

		pug: {
			dev: {
				options: {
					pretty : true
				},
				files: [
					{
						cwd: 'layouts',
						src: ['**/*.pug', '!includes/**/*.pug'],
						dest: '<%= globalConfig.dev %>',
						expand: true,
						ext: '.html'
					}
				]
			},
			prod : {
				options: {
					pretty : true
				},
				files: [
					{
						cwd: 'layouts',
						src: ['**/*.pug', '!includes/**/*.pug'],
						dest: '<%= globalConfig.dist %>',
						expand: true,
						ext: '.html'
					}
				]
			}
		},

		includeSource: {
			dev: {
				options: {
					basePath: '<%= globalConfig.dev %>',
					baseUrl: 'public/'
				},
				files: {
					'<%= globalConfig.dev  %>/index.html': '<%= globalConfig.dev  %>/index.html'
				}
			},
			prod: {
				options: {
					basePath: '<%= globalConfig.dist %>',
					baseUrl: 'public/'
				},
				files: {
					'<%= globalConfig.dist  %>/index.html': '<%= globalConfig.dist  %>/index.html'
				}
			}
		},

		wiredep: {
			options : {
				fileTypes: {
					html: {
						replace: {
							js: '<script src="public/{{filePath}}"></script>',
							css: '<link rel="stylesheet" href="public/{{filePath}}" />'
						}
					}
				},
				overrides: {
					bootstrap: {
						main: [
							'dist/js/bootstrap.js',
							'dist/css/bootstrap.css'
						]
					},
					'font-awesome': {
						'main': [
							'css/font-awesome.css'
						]
					},
					'leaflet-graphicscale': {
						'main': [
							'dist/*.css',
							'dist/*.js'
						]
					},
					'Leaflet.FeatureGroup.SubGroup': {
						'main': [
							'src/*.js'
						]
					},
					'sidebar-v2': {
						'main': [
							'js/leaflet-sidebar.js',
							'css/leaflet-sidebar.css'
						]
					},
					'Leaflet.Coordinates': {
						'dependencies': {}
					},
					'esri-leaflet-geocoder': {
						'main': [
							'dist/*.css',
							'dist/esri-leaflet-geocoder.js'
						]
					},
					'Leaflet.fullscreen': {
						'main': [
							'dist/*.css',
							'dist/Leaflet.fullscreen.min.js'
						]
					}
				}
			},
			dev: {
				src: ['<%= globalConfig.dev  %>/index.html'],
				options: {
					directory: '<%= globalConfig.dev  %>/bower_components'
				}
			},
			prod: {
				src: ['<%= globalConfig.dist  %>/index.html'],
				options: {
					directory: '<%= globalConfig.dev  %>/bower_components'
				}
			}
		},

		copy: {
			dev: {
				expand: true,
				src: ['bower_components/**', 'images/**', 'geoJsons/**', 'fonts/**'],
				dest: '<%= globalConfig.dev  %>'
			},
			prod: {
				expand: true,
				files : [
					{
						cwd: '<%= globalConfig.dist  %>/../../backend/',
						expand: true,
						src: ['app/**', 'conf/**', 'lib/**'],
						dest: '<%= globalConfig.dist  %>/..'
					},
					{
						expand: true,
						src: ['bower_components/**', 'images/**', 'geoJsons/**', 'fonts/**'],
						dest: '<%= globalConfig.dist  %>'
					},
					{
						expand: true,
						flatten: true,
						cwd:'bower_components',
						src: [
							'**/fonts/*.{eot,svg,ttf,woff,woff2}'
						],
						dest: '<%= globalConfig.dist  %>/fonts'
					}
				]
			}
		},

		ngAnnotate: {
			options: {
				singleQuotes: true
			},
			dev: {
				files: [
					{
						cwd: '<%= globalConfig.dev %>/js',
						src: ['**/*.js'],
						dest: '<%= globalConfig.dev %>/js',
						expand: true,
						ext: '.js'
					}
				]

			},

			prod: {
				files: [
					{
						cwd: '<%= globalConfig.dist %>/js',
						src: ['**/*.js'],
						dest: '<%= globalConfig.dist %>/js',
						expand: true,
						ext: '.js'
					}
				]

			}
		},

		notify: {
			dev: {
				options: {
					title: 'Grunt Dev',
					message: 'Grunt dev iniciado!'
				}
			},
			test: {
				options: {
					title: 'Versão para teste',
					message: 'Versão foi gerada com sucesso!'
				}
			}
		},

		useminPrepare: {
			html: '<%= globalConfig.dist  %>/index.html',
			options: {
				dest: '<%= globalConfig.dist  %>',
				root: '<%= globalConfig.dist  %>/..'
			}
		},

		usemin: {
			html: '<%= globalConfig.dist  %>/index.html',
			options: {
				blockReplacements: {
					css: function (block) {
						return '<link rel="stylesheet" href="public/' + block.dest + '">';
					},
					js: function (block) {
						return '<script src="public/' + block.dest + '"></script>';
					}
				}
			}
		},

		clean: {
			options : {
				force : true
			},
			build: ['<%= globalConfig.dist  %>/../../dist/'],
			helpers:{
				files: {
					src: ['<%= globalConfig.dist  %>/bower_components/',
						'<%= globalConfig.dist  %>/css/**/*',
						'!<%= globalConfig.dist  %>/css/styles.css',
						'<%= globalConfig.dist  %>/js/**/*',
						'!<%= globalConfig.dist  %>/js/scripts.js']
				}
			}
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: {
				src: [
					'Gruntfile.js',
					'scripts/**/*.js'
				]
			}
		},

		uglify:{
			dev: {
				options: {
					banner: '!function(exports) {\n/* @ngInject */\n',
					footer: '\n}(function() { this.app = this.app || {controllers:{}, directives:{}, services:{}, utils:{}, modais:{}, constants:{}}; return this.app;}());',
					mangle: false,
					beautify: true,
					compress: false
				},
				files: [
					{
						cwd: 'scripts',
						src: ['**/*.js'],
						dest: '<%= globalConfig.dev %>/js',
						expand: true,
						ext: '.js'
					}
				]

			},
			test: {
				options: {
					banner: '!function(exports) {\n/* @ngInject */\n',
					footer: '\n}(function() { this.app = this.app || {controllers:{}, directives:{}, services:{}, utils:{}, modais:{}, constants:{}}; return this.app;}());',
					mangle: false,
					beautify: true,
					exportAll: true
				},
				files : [
					{
						cwd: 'scripts',
						src: ['**/*.js'],
						dest: '<%= globalConfig.dist %>/js',
						expand: true,
						ext: '.js'
					}
				]
			}

		}
	});

	grunt.registerTask('default', ['jshint:all', 'copy:dev' ,'pug:dev', 'uglify:dev', 'ngAnnotate:dev', 'less:dev' ,'includeSource:dev' ,
		'wiredep:dev','notify:dev', 'watch']);

	grunt.registerTask('test', ['jshint:all', 'clean:build','copy:prod', 'less:prod', 'uglify:test', 'ngAnnotate:prod',
		'pug:prod', 'includeSource:prod', 'wiredep:prod','notify:test', 'useminPrepare', 'concat:generated', 'cssmin:generated', 'uglify:generated',
		'usemin', 'clean:helpers']);

};