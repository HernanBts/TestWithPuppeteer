const puppeteer = require('puppeteer')
const {getText, getCount} = require('../utils/helpers')

xdescribe('Tests of extract info...', () => {
    xit('extracting value of button.', async() => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        })
        const page = await browser.newPage()
        const XPath = false
        await page.goto('https://demoqa.com/buttons')

        // functions and using selector
        const title = await page.title()
        const url = await page.url()
        await page.waitForSelector('#rightClickBtn')
        const valBtn = await getText(page, '#rightClickBtn')

        // using XPath
        const xValBtn = await getText(page, '//*[@id="rightClickBtn"]', XPath)

        // obtain data
        const data = await getCount(page, 'img')

        console.log(`#### Title #### ${title}
                     \n#### URL #### ${url}
                     \n#### XPath #### ${xValBtn}
                     \n#### Value #### ${valBtn}
                     \n#### Data #### ${data}`)

        await browser.close()
    }, 20000)
})