require('dotenv').config()
const http = require ("http")


function requesController(){
    console.log("yeaaa")

}

const PORT = process.env.PORT
const server = http.createServer(requesController)
server.listen(PORT, function(){
    console.log("wasssaaaa"+ PORT)
})