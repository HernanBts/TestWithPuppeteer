//import {launch} from 'puppeteer'
const puppeteer = require('puppeteer')

describe('My first test...', () => {
    it('Open and close browser', async() => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        })

        const page = await browser.newPage()
        await page.goto('https://yahoo.com')
        await page.waitForTimeout(1000)
        await page.waitForSelector('img')
        await page.reload()

        await page.goto('https://google.com')
        await page.waitForTimeout(1000)
        await page.waitForSelector('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b')
        await page.goBack()

        await page.waitForSelector('img')
        await page.goForward()

        const page2 = await browser.newPage()
        await page2.goto('https://github.com')
        await page.waitForTimeout(2000)

        await browser.close()
        console.log('finsh test...')
    }, 30000)
})
