//import {launch} from 'puppeteer'
const puppeteer = require('puppeteer')

describe('My first test...', () => {
    it('Open and close browser', async() => {
        const browser = await puppeteer.launch({
            headless: false,
        })

        const page = await browser.newPage()
        await page.goto('https://www.google.com')
        await page.waitForTimeout(5000)

        await browser.close()
        console.log('finsh test...')
    }, 10000)
})
