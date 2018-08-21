const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const routes = require("./routes");

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.use(routes);


app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(port);

console.log('App is listening on port ' + port);