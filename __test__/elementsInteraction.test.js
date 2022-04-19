const puppeteer = require('puppeteer')

describe('My second test...', () => {
    it('Interaction with mouse clicks', async() => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        })

        const page = await browser.newPage()
        await page.goto('https://demo.guru99.com/test/simple_context_menu.html')

        // click on alert
        page.on('dialog', async(dialog) => {
            await dialog.accept()
        })

        // right lick
        await page.click('#authentication > span', { button:'right', delay: 100 })

        // doble click
        await page.click('#authentication > button', { clickCount: 2, delay: 100 })

        // using clicks and type...
        await page.goto('https://devexpress.github.io/testcafe/example/')

        await page.type('#developer-name', 'HernanBts', {delay: 200})
        await page.click('#tried-test-cafe')
        await page.type('#comments', 'This es a comment using puppeteer', {delay: 100})
        await page.click('#windows')
        await page.select('#preferred-interface','Both')
        await page.click('#submit-button')
        await page.waitForSelector('#article-header')

        await browser.close()
    }, 20000)
})
