// to define express application

const express = require('express')
const cors = require('cors')
const orderRoutes = require('./routes/order.route')

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express()

app.use(cors())
app.use("/orders", orderRoutes)

const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get("/health", (req, res) => {
    res.send("OK")
})



module.exports = app;