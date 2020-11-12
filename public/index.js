let main = document.getElementsByTagName('main')[0]
let maxRows = 10
let maxCols = 10
let key = 'ss'

// entry function
async function run() {

  // grab the spreadsheet data
  let data = await fetch(`/api?key=${ key }`)

  let html = '<form action=/save method=post>'

  html += '<input type=hidden name=table value=spreadsheet>'
  html += '<input type=text name=key required class=name>'

  for (let row = 0; row <= maxRows; row++) {
    for (let col = 0; col <= maxCols; col++) {
      html += `<input type=text name="${ row }-${ col }">`
    }
  }

  html += '<button>save</button></form>'

  main.innerHTML = html
}

// top level await will get rid of this..
;(async function () {
  await run()
})()
