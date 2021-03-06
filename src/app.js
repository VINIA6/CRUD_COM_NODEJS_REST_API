// MODO CONVENCIONAL
const express = require("express")
const routes = require("./routes")
// MODO SUCRASE
// import express from "express"
// import routes from "./routes"

class App{
    constructor(){
        this.server = express()
        this.middlwares()
        this.routes()
    }
    middlwares(){
        this.server.use(express.json())
    }
    routes(){
        this.server.use(routes)
    }
}

module.exports = new App().server

// export default new App().server