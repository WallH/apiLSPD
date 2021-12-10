
//require("dot-env").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const db = require("./models");

db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  }).then(()=> { console.log("¡Conexión a la base de datos exitosa!")})
  .catch(err =>
    {
      console.log("ERROR: Conexión a la base de datos fallida.", err);
      process.exit();
    });


var corsOptions = {
    origin: ["http://192.168.35.5", "http://localhost", "http://localhost:4200", "https://walldev.site", "http://walldev.site", "http://sigj.justiciajujuy.gov.ar", "https://sigj.justiciajujuy.gov.ar"],
    credentials:true
};


app.get("/", async(req, res) =>
{
    res.send({alive: true});
});

app.use(bodyParser.json({limit:'50mb'}));
app.use(cookieParser());
app.use(cors(corsOptions));
require("./routes/rango.routes")(app);
require("./routes/usuario.routes")(app);
require("./routes/valoracionoficial.routes")(app);
require("./routes/auth.routes")(app);
const PORT = 8081;
app.listen(PORT, () => {
  console.log("API LSPD PORT "+PORT+".");
});


