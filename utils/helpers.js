module.exports = {
    
    click: async function(page, selector, opts={}, isSelector=true) {
        try {
            if(isSelector) {
                await page.waitForSelector(selector)
            } else {
                await page.waitForXPath(selector)
            }
            await page.click(selector, opts)
        } catch (error) {
            throw new Error(`Error to try click in element: ${selector}`)
        }
    },
    
    doubleCLick: async function(page, selector) {
        try {
            await page.waitForSelector(selector)
            await page.click(selector, {clickCount:2})
        } catch (error) {
            throw new Error(`Error to try doubleClick in element: ${selector}`)
        }
    },

    rightClick: async function(page, selector, isSelector=true) {
        try {
            if(isSelector) {
                await page.waitForSelector(selector)
            } else {
                await page.waitForXPath(selector)
            }
            await page.click(selector, {button:'right'})
        } catch (error) {
            throw new Error(`Error to try rightClick in element: ${selector}`)
        }
    },

    getText: async function(page, selector, isSelector=true) {
        try {
            if(isSelector) {
                await page.waitForSelector(selector)
                return await page.$eval(selector, (e)=>e.textContent)
            } else {
                const data = await page.waitForXPath(selector)
                return await page.evaluate((text) => text.textContent, data)
            }
        } catch (error) {
            throw new Error(`Error to geting text in element: ${selector}`)
        }
    },

    setText: async function(page, selector, text, opts={}, isSelector=true) {
        try {
            if(isSelector) {
                await page.waitForSelector(selector)
            } else {
                await page.waitForXPath(selector)
            }
            return await page.type(selector, text, opts)
        } catch (error) {
            throw new Error(`Error to seting text in element: ${selector}`)
        }
    },

    getCount: async function(page, selector, isSelector=true) {
        try {
            if(isSelector) {
                await page.waitForSelector(selector)
            } else {
                await page.waitForXPath(selector)
            }
            return await page.$$eval(selector, (e)=>e.length)
        } catch (error) {
            throw new Error(`Error to geting count in element: ${selector}`)
        }
    },

    selectCombo: async function(page, selector, op, isSelector=true) {
        try {
            if(isSelector) {
                await page.waitForSelector(selector)
            } else {
                await page.waitForXPath(selector)
            }
            return await page.select(selector, op)

        } catch (error) {
            throw new Error(`Error to geting count in element: ${selector}`)
        }
    }
}