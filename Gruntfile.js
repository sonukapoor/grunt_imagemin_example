module.exports = function (grunt) {

  grunt.initConfig({
    imagemin: {                          // Task
      dynamic: {
        options: {                       // Target options
          optimizationLevel: 3
        },                        // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'images/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg}'],   // Actual patterns to match
          dest: 'dist/'                  // Destination path prefix
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['imagemin']);
};