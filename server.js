const express = require("express")
const app = express()

const PORT = 9121

app.get('/', (req,res) => {
    res.send("Server on")
})

app.listen(PORT, err => {
    if(err) throw new Error("Server problem", err)
    console.log("Server on in PORT - ", PORT)
})