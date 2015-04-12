module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
       options: {
        port: 8080,
        protocol: 'http',
        base: '.',
        hostname: 'localhost',
        keepalive: false
      }
    }
  },
  md2html: {
    one_file: {
      options: {},
      files: [{
        src: ['outline.md'],
        dest: 'outline.html'
      }]
    }
  },
  watch: {
    scripts: {
    	files: ['outline.md'],
    	tasks: ['md2html'],
    	options: {
       spawn: false,
        //livereload: 8080
      }
    },
    css: {
      files: '**/*.css',
      options: {
        livereload: true
      }
    },
    html: {
      files: ['index.html','**/*.css'],
      options: {
        livereload: true
      }


    } },
    validation: {
     options: {
      reset: grunt.option('reset') || false,
      stoponerror: false,
				relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'] //ignores these errors 
			},
			files: {
				src: ['<%= dirs.dest %>/*.html']
			}
		}
  });



  	grunt.loadNpmTasks('grunt-contrib-watch'); // load watch task

	grunt.loadNpmTasks('grunt-contrib-connect'); // start server

	grunt.loadNpmTasks('grunt-html-validation'); // html validation task

	grunt.registerTask('default', 'Default Grunt Task Runner', function() {
   grunt.task.run(['connect','watch']);
 });


};