const express = require("express");
const path = require("path");
require("./db/conn");

const app = express();
const port = process.env.PORT || 3000;

// Setting the path to the "public" directory
const staticpath = path.join(__dirname, "../public");

// Middleware to serve static files
app.use(express.static(staticpath));

// Routing
// app.get(path, callback)
app.get("/", (req, res) => {
    // Send the "index.html" file as a response
    res.sendFile(path.join(staticpath, "index.html"));
});

app.get("/contact", (req, res) => {
    // Send the "contact.html" file as a response
    res.sendFile(path.join(staticpath, "contact.html"));
});

app.get("/search", (req, res) => {
    // Send the "search.html" file as a response
    res.sendFile(path.join(staticpath, "search.html"));
});

app.get("/about", (req, res) => {
    // Send the "about.html" file as a response
    res.sendFile(path.join(staticpath, "about.html"));
});

app.get("/blogPost", (req, res) => {
    // Send the "blogPost.html" file as a response
    res.sendFile(path.join(staticpath, "blogPost.html"));
});

// Server starting
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
