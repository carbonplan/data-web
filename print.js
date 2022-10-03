const fs = require('fs')
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
    printBackground: true,
    format: 'letter',
  })

  await browser.close()
}

try {
  console.log('removing old PDFs...')
  fs.rmSync('pdfs/', { recursive: true })
  console.log('removed.')
} catch (e) {
  console.log('no existing PDFs.')
}
console.log('creating new PDFs folder...')
const result = fs.mkdirSync('pdfs/')
console.log('created.')
console.log('writing new files...')
writePDF()
  .then(() => console.log('done!'))
  .catch((e) => console.log('errored', e))
