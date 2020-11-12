@app
spreadsheet

@static 
folder public
fingerprint true

@http
post /save
get /api

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
