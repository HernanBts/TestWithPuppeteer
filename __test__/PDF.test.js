const puppeteer = require('puppeteer')

describe('Making PDF with puppeteer', () => {
    jest.setTimeout(30000)

    let browser
    let page

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true,
            defaultViewport: null,
        })
        page = await browser.newPage()

        await page.goto('https://demoqa.com', {waitUntil: 'networkidle0'})
    })

    afterAll(async () => {
        await browser.close()
    })

    it('Normal PDF', async () => {
        let pdfCSS = []
        pdfCSS.push('<style>')
        pdfCSS.push('h1 { front-size:10px; margin-left:30px;}')
        pdfCSS.push('</style>')
        const css = pdfCSS.join('')

        await page.pdf({
            path: './firstPDF.pdf',
            formt: 'A4',
            printBackground: true,
            displayHeaderFooter: true,
            headerTemplate: `${css} <h1>First PDF using puppeteer.</h1>`,
            FooterTemplate: `${css} <h1>Page <span class="pageNumber"></span> of <span class="totalPage"></span></h1>`,
            margin: {
                top: '100px',
                botton: '200px',
                right: '30px',
                left: '30px'
            }
        })
    })

    it('Landscape PDF', async () => {
        let pdfCSS = []
        pdfCSS.push('<style>')
        pdfCSS.push('h1 { front-size:10px; margin-left:30px;}')
        pdfCSS.push('</style>')
        const css = pdfCSS.join('')

        await page.pdf({
            path: './firstLandscapePDF.pdf',
            formt: 'A4',
            printBackground: true,
            displayHeaderFooter: true,
            headerTemplate: `${css} <h1>First PDF using puppeteer.</h1>`,
            FooterTemplate: `${css} <h1>Page <span class="pageNumber"></span> of <span class="totalPage"></span></h1>`,
            margin: {
                top: '100px',
                botton: '200px',
                right: '30px',
                left: '30px'
            },
            landscape: true
        })
    })

})