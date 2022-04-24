const puppeteer = require('puppeteer')
const {toMatchImageSnapshot} = require('jest-image-snapshot')

expect.extend({toMatchImageSnapshot})

xdescribe('Visual testings...', () => {
    jest.setTimeout(30000)

    let browser
    let page

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        })
        page = await browser.newPage()

        await page.goto('https://google.com', {waitUntil: 'networkidle0'})
    })

    afterAll(async () => {
        await browser.close()
    })

    xit('snapshot of page', async() => {
        await page.goto('https://demoqa.com')
        await page.waitForSelector('img')

        const screenshot = await page.screenshot({
            path: './snapshots/capture.png'
        })

        expect(screenshot).toMatchImageSnapshot()
    })

    xit('snapshot of element', async() => {
        const image = await page.waitForSelector('img')

        const screenshot = await image.screenshot()

        expect(screenshot).toMatchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent'
        })
    })

    xit('snapshot of device', async() => {
        const phone = puppeteer.devices['iPhone X']
        await page.emulate(phone)
        await page.waitForSelector('img')

        const screenshot = await page.screenshot()

        expect(screenshot).toMatchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent'
        })
    })

    xit('snapshot without images', async() => {
        await page.waitForSelector('img')

        await page.evaluate(removeAllImg())
        const screenshot = await page.screenshot()

        expect(screenshot).toMatchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent'
        })
    })

    function removeAllImg() {
        return img = ()=>document.querySelectorAll('img'||[]).forEach(img=>img.remove())
    }
})
