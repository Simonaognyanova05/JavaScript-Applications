const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const options = { headless: false, slowMo: 200 };
const url = 'http://127.0.0.1:5500/Cookbook%20Part%203/index.html';

describe('Custom Test', function() {
    let browser, page;
    this.timeout(6000);
    before(async () => browser = await chromium.launch(options));
    beforeEach(async () => page = await browser.newPage());
    afterEach(async () => await page.close());
    after(async () => await browser.close());

    it('Successful login', async () => {
        await page.goto(url);

        //Take a screenshot
        //await page.screenshot({path:'screen.png'});

        //Click Login - button
        await page.click('text=Login');

        //Test login
        await page.fill('input[name=email]', 'peter@abv.bg');
        await page.fill('input[name=password]', '123456');
        await page.click('input[value=Login]');

        //Close browser
        //await browser.close();

        let logoutText = await page.textContent('#logoutBtn');
        
        expect(logoutText).to.equal('Logout');
    })
})