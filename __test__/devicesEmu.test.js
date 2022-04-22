const puppeteer = require('puppeteer')

describe('Emulating diferents devices...', () => {
    jest.setTimeout(30000)

    let browser
    let page

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        })
        page = await browser.newPage()
        await page.goto('https://demoqa.com/')
    })

    afterAll(async () => {
        browser.close()
    })

    it('Devices site EMU', async () => {
        await page.emulate({
            name: 'My SmartPhone',
            viewport: {
                width: 375,
                height: 667,
                deviceScaleFactor: 2,
                isMobile: true,
                hasTouch: true,
                isLandscape: false
            },
            userAgent: 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36'
        })

        await page.waitForTimeout(3000)
    })

    it('Desktop site EMU', async () => {
        await page.setViewport({
            width: 1280,
            height: 800
        })

        await page.waitForTimeout(3000)
    })

    it('Tablet site EMU', async () => {
        const tablet = puppeteer.devices['iPad Pro']
        await page.emulate(tablet)

        await page.waitForTimeout(3000)
    })

    it('Phone site EMU', async () => {
        const Phone = puppeteer.devices['iPhone X']
        await page.emulate(Phone)

        await page.waitForTimeout(3000)
    })
})