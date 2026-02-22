const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    devServer: {
        port: 9001,
        host: '0.0.0.0',
        https: false,
        open: true,
        client: {
            overlay: false,
        },
    }
})
