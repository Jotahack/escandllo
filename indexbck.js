const http = require ("http")


function requesController(){
    console.log("yeaaa")

}
const server = http.createServer(requesController)
server.listen(4000)