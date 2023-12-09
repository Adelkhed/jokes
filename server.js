
const express = require("express");
const app = express();

require("./config/mongoose.config")

const AllMyJokeRoutes = require("./routes/jokes.route");


app.use(express.json(), express.urlencoded({ extended: true }));
AllMyJokeRoutes(app);

app.listen(5000,()=>{
     console.log(`the server is fired up on port 5000`);
 } );