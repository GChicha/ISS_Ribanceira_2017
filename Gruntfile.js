module.exports = function(grunt) {
    grunt.initConfig({
        ts: {
            default: {
                src: ["src/server/**/*.ts", "!node_modules/**"],
                outDir: "dist/",
                options: {
                    rootDir: "src/",
                }
            }
        }
    })
    grunt.loadNpmTasks("grunt-ts")
    grunt.registerTask("default", ["ts"])
}
