const express = require("express");
const fs = require("fs");

const router = express.Router();

router.post("/add_tribe", async (req, res) => {
    try {
        if (req.body.tribe_name) {
            let que = "USE tribe_legacy;\n"+
             "INSERT INTO tribes (t_name, popl) VALUES ('" + req.body.tribe_name + "', " + req.body.tribe_popl + ");";
            await global.db.query(que, (err) => {
                if (err) { console.log(err); }
                else { res.send("inserted successfully"); }
            });
        } else {
            console.log("no body");
        }
    } catch {
        console.log("ded");
    }
});

module.exports = router;