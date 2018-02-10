var grunt = require("grunt");
grunt.config.init({
        pkg: grunt.file.readJSON('package1.json'),
        'create-windows-installer': {
                ia32: {
                        appDirectory:'movecss-win32-x64',
                        authors: 'move11@126.com',
                        exe: 'movecss.exe',
                        description: "this is a test",
                }       
        }
})

grunt.loadNpmTasks('grunt-electron-installer');
grunt.registerTask('default', ['create-windows-installer']); 