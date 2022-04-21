const puppeteer = require('puppeteer')

xdescribe('My third test...', () => {
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

    xit('Waiting load page and explicit...', async() => {
        // explicit waiting
        await page.waitForTimeout(1000)
    })
    xit('Waiting selectors and XPath...', async() => {
        // selector waiting
        await page.waitForSelector('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b')
        // xpath waiting
        await page.waitForXPath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input')

        await page.goto('https://demoqa.com/modal-dialogs', {waitUntil: 'networkidle0'})
        const modalBtn = await page.waitForXPath('//*[@id="showSmallModal"]')
        await modalBtn.click()
        await page.waitForTimeout(1000)
        await page.click('#closeSmallModal', {waitForTimeout: 1000})
    })

    xit('Waiting functions...', async () => {
        await page.waitForFunction(() => document.querySelector('#example-modal-sizes-title-sm').innerText === 'Small Modal')

        const observeResize = page.waitForFunction('window.innerWidth < 100')
        await page.setViewport({width: 90, height: 90})
        await page.waitForTimeout(1000)
        await observeResize
    })
})
