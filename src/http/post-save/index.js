let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = arc.http.async(handler)

async function handler(req) {

  let result = {}

  for (let k of Object.keys(req.body)) {
    if (req.body[k] != '') {
      result[k] = req.body[k]
    }
  }

  let ss = await data.set(result)
  console.log(ss)

  return {
    statusCode: 303,
    headers: {
      'location': '/'
    }
  }
}
