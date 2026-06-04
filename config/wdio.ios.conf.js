const { config } = require('./wdio.shared.conf.js')

config.capabilities = [{
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 17 Pro',
    'appium:platformVersion': '26.5',
    'appium:automationName': 'XCUITest',
    'appium:app': `${process.cwd()}/src/apps/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.7.1.app`,
    'appium:udid': '55FBB0D3-810D-4304-BE16-50A6C6E091B5'
}]

exports.config = config