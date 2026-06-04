
class LoginPage {
    get usernameField(){ 
        return $('~test-Username'); 
    }
    get passwordField(){ 
        return $('~test-Password'); 
    }

    get loginButton(){ 
        return $('~test-LOGIN'); 
    }

    async login(username, password) {
        await this.usernameField.waitForDisplayed();
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await driver.hideKeyboard();
        await this.loginButton.click();

    }
}

module.exports = new LoginPage();