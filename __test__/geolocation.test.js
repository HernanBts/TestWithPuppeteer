const puppeteer = require('puppeteer')
const {click} = require('../utils/helpers')

xdescribe('Geolocation testings...', () => {
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

    xtest('overriting my location', async () => {
        const context = browser.defaultBrowserContext()

        await context.overridePermissions('https://chercher.tech/practice/geo-location.html', ['geolocation'])
        await page.setGeolocation({latitude: 40, longitude: 30})
        await page.goto('https://chercher.tech/practice/geo-location.html')
        await click(page, '#geo-button')
        await page.waitForTimeout(2000)
    })
})