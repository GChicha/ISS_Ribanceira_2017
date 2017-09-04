module.exports = function(grunt) {
    grunt.initConfig({
        ts: {
            default: {
                src: ["src/server/**/*.ts", "!node_modules/**"],
                outDir: "dist/",
                options: {
                    rootDir: "src/",
                },
                tsconfig: {
                    tsconfig: './tsconfig.json'
                }
            }
        },
        watch: {
            ts: {
                files: ["src/server/**/*.ts"],
                tasks: ["ts"]
            }
        }
    })
    grunt.loadNpmTasks("grunt-ts")
    grunt.loadNpmTasks("grunt-contrib-watch")
    grunt.registerTask("default", ["ts"])
}
