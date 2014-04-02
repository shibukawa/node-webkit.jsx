module.exports = function(grunt) {
  'use strict';
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    sampleDir: "samples",
    srcDir: "src",
    testDir: "test",
    docDir: "doc",

    watch: {
      sample: {
        files: ['<%= sampleDir %>/*.jsx', '<%= srcDir %>/*.jsx'],
        tasks: ['jsx:build']
      },
      test: {
        files: ['<%= testDir %>/*.jsx', '<%= srcDir %>'],
        tasks: ['jsx:test']
      }
    },

    jsx: {
      build: {
        src: ['<%= sampleDir %>/*.jsx'],
        add_search_path: ['<%= srcDir %>'],
        dest: '<%= sampleDir %>/',
        executable: 'node'
      },

      test: {
        src: ['<%= testDir %>/*.jsx'],
        add_search_path: ['<%= srcDir %>'],
        test: true
      },

      doc: {
        src: ['<%= srcDir %>/*.jsx'],
        add_search_path: ['<%= srcDir %>'],
        dest: '<%= docDir %>',
        mode: 'doc'
      }
    }
  });

  for (var key in pkg.devDependencies) {
    if (/grunt-/.test(key)) {
      grunt.loadNpmTasks(key);
    }
  }

  grunt.registerTask('default', ['jsx:test']);
  grunt.registerTask('build', ['jsx:build']);
  grunt.registerTask('test', ['jsx:test']);
  grunt.registerTask('doc', ['jsx:doc']);
};
// vim: set expandtab tabstop=2 shiftwidth=2:
