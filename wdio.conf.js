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
    "app": join(process.cwd(), './app/android/web.apk'),
    "appWaitDuration": 400000,
    "appPackage": "com.wdiodemoapp",
    "appActivity": "com.wdiodemoapp.MainActivity",
      "appWaitActivity": ".MainActivity",
      // appWaitActivity: 'com.woocommerce.android/.ui.login.LoginActivity',
    },
  ],
};