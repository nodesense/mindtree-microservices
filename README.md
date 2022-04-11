dotenv - to provide configuration for prod, dev, testing environment
nodemon - restart server.js whenever the files are change
mongoose - mongodb orm

services - to have business logic (BL), database interactions
routes - to have routes/path to controller
controllers - to have logic specific to request/response (http),
              use services for BL


.env file content

```
IP_ADDRESS=0.0.0.0
PORT=8080
MONGO_SERVER=
MONGO_DATABASE=
MONGO_USERNAME=
MONGO_PASSWORD=

```