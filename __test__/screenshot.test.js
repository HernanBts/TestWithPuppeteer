const puppeteer = require('puppeteer')

describe('Making screenshots...', () => {
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

    xit('Normal screenshot...', async () => {
        await page.screenshot({
            path: './screenshots/capture.png',
            fullPage: true
        })
    })

    xit('area screenshot...', async () => {
        await page.screenshot({
            path: './screenshots/areaCapture.png',
            clip: {
                x: 0,
                y: 0,
                width: 500,
                height: 500,
            }
        })
    })

    xit('transparent background screenshot...', async () => {
        await page.evaluate(() => (document.body.style.background = 'transparent'))
        await page.screenshot({
            path: './screenshots/transBgCapture.png',
            omitBackground: true
        })
    })

    xit('element screenshot...', async () => {
        const element = await page.waitForSelector('#app>header>a>img')
        await element.screenshot({
            path: './screenshots/elementCapture.png'
        })
    })

})