const express = require("express");
const fs = require("fs");

const db = require("./db.js");
const init = require("./initialize.js");

const add_tribe = require("./routes/add_tribe.js");
const by_tribe = require("./routes/by_tribe.js");
const by_spec = require("./routes/by_spec.js");
const by_state = require("./routes/by_state.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => { res.send("app is running"); });
app.use("/", add_tribe);
app.use("/", by_tribe);
app.use("/", by_spec);
app.use("/", by_state);


db.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("connected as id " + db.threadId);
    global.db = db;
    init();
});

app.listen(3000, (err) => {
    if (err) { console.log(err); }
    else { console.log("server listening on port 3000"); }
});

module.exports = app;
