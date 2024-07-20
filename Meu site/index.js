const express = require('express')
const app = express()
app.get('/', function(req, res){
res.send(" GESTAO DE ESTOQUE")
})
app.listen(3000)