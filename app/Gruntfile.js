module.exports = function(grunt) {
    grunt.conf = {
        banner: '/*\n  <%= pkg.name %> v<%= pkg.version %> \n  Generate date <%= grunt.template.today("yyyy-mm-dd, HH:MM:ss") %> \n*/\n',
        source: [
            'src/*.js',
        ]
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                banner: this.conf.banner
            },
            app: {
                src: this.conf.source,
                dest: 'public/js/app.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('app', ['concat:app']);
    grunt.registerTask('default', ['app']);
};