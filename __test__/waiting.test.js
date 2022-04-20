const puppeteer = require('puppeteer')

xdescribe('My third test...', () => {
    xit('Types of waiting', async() => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        })

        const page = await browser.newPage()
        // wating to load page...
        await page.goto('https://google.com', {waitUntil: 'networkidle0'})

        // explicit waiting
        await page.waitForTimeout(1000)
        // selector waiting
        await page.waitForSelector('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input')
        // xpath waiting
        await page.waitForXPath('//*[@id="hplogo"]')

        await page.goto('https://demoqa.com/modal-dialogs', {waitUntil: 'networkidle0'})
        const modalBtn = await page.waitForXPath('//*[@id="showSmallModal"]')
        await modalBtn.click()
        await page.waitForTimeout(1000)
        await page.click('#closeSmallModal', {waitForTimeout: 1000})

        await browser.close()
    }, 30000)
})
