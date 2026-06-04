const LoginPage = require('../pages/Login.page');
const ProductPage = require('../pages/Products.page');

describe('Login Test', () => {
    
    it('should login with valid credentials', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await ProductPage.productsTitle.waitForDisplayed({ timeout: 10000 });
        await expect(ProductPage.productsTitle).toBeDisplayed();
    }); 
});