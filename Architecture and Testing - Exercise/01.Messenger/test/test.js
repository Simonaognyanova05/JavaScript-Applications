const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const options = { headless: false, slowMo: 200 };
let url = 'http://127.0.0.1:5500/index.html';

describe('Test', function() {
    let browser, page;
    this.timeout(6000);

    before(async () => browser = await chromium.launch(options));
    beforeEach(async () => page = await browser.newPage());
    afterEach(async () => await page.close());
    after(async () => await browser.close());

    it('Load messages', async () => {
        await page.goto(url);
        await page.click('#refresh');

        await browser.close();
        expect(true).to.be.true;
    });

    it('Send request', async () => {
        await page.goto(url);

        await page.fill('input[name=author]', 'Simona');
        await page.fill('input[name=content]', 'Kak si?');
        await page.click('#submit');

        await browser.close();
        expect(true).to.be.true;
    })
})