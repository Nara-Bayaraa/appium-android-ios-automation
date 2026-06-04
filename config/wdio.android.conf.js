const { config } = require('./wdio.shared.conf.js')

config.capabilities = [{
    platformName: 'Android',
    'appium:deviceName': 'Pixel 2 API 30',
    'appium:platformVersion': '11',
    'appium:automationName': 'UiAutomator2',
    'appium:app': `${process.cwd()}/src/apps/SauceLabs.apk`,
    'appium:appWaitActivity': 'com.swaglabsmobileapp.*'
}]

exports.config = config