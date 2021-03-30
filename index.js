import fs from 'fs'
import cheerio from 'cheerio'
let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0
let count5 = 0
let count6 = 0
let count7 = 0
let id = 0
let name = ''
let bodyOriginal = ''
let body = ''
let created = ''
let updated = ''
let primarySite = ''
let status = 0
let articleArray = []


fs.readFile('./XML-Storage/Allured-Content-1.xml', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  // console.log(data)
  const $ = cheerio.load(data, {
    xmlMode: true
  })
  // console.log($('content').children().next.attribs)
  $('content').each(function(i, currentXMLTag) {
    const currentTagAttributes = currentXMLTag.attributes[0]
    // console.log(currentTagAttributes.value)
    id = Number(currentTagAttributes.value)
    count1++
    currentXMLTag.childNodes.forEach(loggerFunc)
    function loggerFunc (item, index) {
      if (item.name) {
        // console.log(item.name)
        if (item.name === 'field') {
          // console.log(item.attributes[0].value)
          if (item.attributes[0].value === 'title') {
            // console.log(item.children[0].children[0].data)
            name = String(item.children[0].children[0].data)
            count2++
          } else if (item.attributes[0].value === 'text') {
            // console.log(item.children[0].children[0].data)
            bodyOriginal = String(item.children[0].children[0].data)
            const regex = /( |<([^>]+)>)/ig
            const replaced = bodyOriginal.replace(regex, ' ')
            body = String('<p>' + replaced + '</p>')
            // console.log(body)
            count3++
          }
        } else if (item.name === 'createDate') {
          // console.log(item.children[0].data)
          created = String(item.children[0].data)
          count4++
        } else if (item.name === 'modifiedDate') {
          // console.log(item.children[0].data)
          updated = String(item.children[0].data)
          count5++
        } else if (item.name === 'websitePlacementURLs') {
          // console.log(item.children[0].next.children[0].next.children[0].data)
          primarySite = String(item.children[0].next.children[0].next.children[0].data)
          count6++
        } else if (item.name === 'status') {
          // console.log(item.children[0].data)
          if (item.children[0].data === 'LIVE') {
            // console.log('LIVE')
            status = 1
          } else {
            // console.log('???')
            status = 0
          }
          count7++
        }
        // console.log(index)
      }
    }
    const incomingArticleJSON = {
      id: id,
      name: name,
      bodyOriginal: bodyOriginal,
      body: body,
      created: created,
      updated: updated,
      primarySite: primarySite,
      status: status
    }
    articleArray = [...articleArray, JSON.stringify(incomingArticleJSON)]
  })
  fs.writeFile('test.json', '[' + articleArray.toString() + ']', { encoding: 'utf8' }, () => {
  })
  // console.log(count1) // Article Count
  // console.log(count2) // TItle Count
  // console.log(count3) // Body Count
  // console.log(count4) // Created at Count
  // console.log(count5) // Modified at Count
  // console.log(count6) // Domain Count
  // console.log(count7) // Status Count
})
