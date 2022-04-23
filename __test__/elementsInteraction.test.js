const puppeteer = require('puppeteer')
const {click, doubleCLick, rightClick, setText, selectCombo} = require('../utils/helpers')


xdescribe('My second test...', () => {
    xit('Interaction with mouse clicks', async() => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        })
        const XPath = false
        const page = await browser.newPage()

        await page.goto('https://demoqa.com/buttons')

        // click on alert
        page.on('dialog', async(dialog) => {
            await dialog.accept()
        })

        // right lick
        await rightClick(page,'#rightClickBtn')

        // doble click
        await doubleCLick(page,'#doubleClickBtn')

        // using clicks and type...
        await page.goto('https://devexpress.github.io/testcafe/example/')

        await setText(page, '#developer-name', 'HernanBts', {delay: 200})
        await click(page, '#tried-test-cafe')
        await setText(page, '#comments', 'This es a comment using puppeteer', {delay: 100})
        await click(page, '#windows')
        await selectCombo(page, '#preferred-interface','Both')
        await click(page, '#submit-button')
        await page.waitForSelector('#article-header')

        await browser.close()
    }, 20000)
})
