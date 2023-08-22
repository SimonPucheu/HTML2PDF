const puppeteer = require('puppeteer');

const args = process.argv.slice(2);
const input = args[0];
const output = args[1];

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`file://${input}`, { waitUntil: 'networkidle0' });
    await page.pdf({ path: output, format: 'A4' });
    await browser.close();
})();