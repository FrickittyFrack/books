const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('*', function (req, res) {
//   const index = path.join(__dirname, "client/public", "index.html");
//   res.sendFile(index);
// });

// app 
//     .use(express.static('./public'))
//     .get('*',function (req,res) {
//         res.sendfile('/public/main.html');
//         })
//  .listen(3000);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
  app.get('*', function (req, res) {
    const index = path.join(__dirname, "client", "build", "index.html");
    res.sendFile(index);
  });
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
