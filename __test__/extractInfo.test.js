const puppeteer = require('puppeteer')

xdescribe('Tests of extract info...', () => {
    xit('extracting value of button.', async() => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        })
        const page = await browser.newPage()
        await page.goto('https://demoqa.com/buttons')

        // functions and using selector
        const title = await page.title()
        const url = await page.url()
        await page.waitForSelector('#rightClickBtn')
        const valBtn = await page.$eval('#rightClickBtn', (button)=>button.textContent)

        // using XPath
        const button = await page.waitForXPath('//*[@id="rightClickBtn"]')
        // const [button] = await page.$x('//*[@id="rightClickBtn"]')

        const xValBtn = await page.evaluate((text) => text.textContent, button)

        // obtain data
        const data = await page.$$eval('img', (img) => img.length)

        console.log(`#### Title #### ${title}
                     \n#### URL #### ${url}
                     \n#### XPath #### ${xValBtn}
                     \n#### Value #### ${valBtn}
                     \n#### Data #### ${data}`)

        await browser.close()
    }, 20000)
})