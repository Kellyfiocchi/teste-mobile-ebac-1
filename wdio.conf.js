const { join } = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    capabilities: [{     
    "platformName": "Android",
    "platformVersion": "12.0",
    "deviceName": "ebac",
    "automationName": "UIAutomator2",
    "app": join(process.cwd(), './app/android/loja-ebac.apk'),
    "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity'

    }]
}