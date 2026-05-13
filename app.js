const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname + "/public"); // Watch your static folder


// Tell Node where your static files (CSS, JS, Images) are
app.use(express.static(path.join(__dirname, 'public')));
app.use(connectLiveReload());

// Serve your main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});