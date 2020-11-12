let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = arc.http.async(save)

async function save (req) {

  let result = data.get({
    table: 'spreadsheets', 
    key: req.query.key 
  })

  return { json: result }
}
