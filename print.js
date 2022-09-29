const puppeteer = require('puppeteer')

const baseUrl = process.env.PRINT_URL || 'http://localhost:4002'

async function writePDF() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`${baseUrl}/print`, {
    waitUntil: 'networkidle2',
  })

  const today = new Date()
  const formattedDate = `${String(today.getMonth() + 1).padStart(
    2,
    '0'
  )}-${String(today.getDate()).padStart(2, '0')}-${today.getFullYear()}`

  await page.pdf({
    path: `pdfs/CarbonPlan-Datasets-${formattedDate}.pdf`,
    format: 'letter',
    margin: { bottom: 54, left: 54, right: 54, top: 54 },
  })

  await browser.close()
}

writePDF()
