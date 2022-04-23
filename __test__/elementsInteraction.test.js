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

        await page.goto('https://demo.guru99.com/test/simple_context_menu.html')

        // click on alert
        page.on('dialog', async(dialog) => {
            await dialog.accept()
        })

        // right lick
        await rightClick(page,'#authentication > span')

        // doble click
        await doubleCLick(page,'#authentication > button')

        // using clicks and type...
        await page.goto('https://devexpress.github.io/testcafe/example/')

        await setText(page, '#developer-name', 'HernanBts', {delay: 200})
        await click(page, '#tried-test-cafe')
        await setText(page, '#comments', 'This es a comment using puppeteer', {delay: 100})
        await click(page, '#windows')
        await selectCombo('#preferred-interface','Both')
        await click(page, '#submit-button')
        await page.waitForSelector('#article-header')

        await browser.close()
    }, 20000)
})
