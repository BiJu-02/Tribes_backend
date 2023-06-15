const express = require("express");

const router = express.Router();

router.get("/by_tribe", async (req, res) => {
    try {
        if (req.body.tribe_name) {
            let que = "USE tribe_legacy;" + 
            "SELECT * FROM tribes WHERE t_name = '" + req.body.tribe_name + "';";
            await global.db.query(que, (err, result, fields) => {
                if (err) { console.log(err); }
                else {
                    try {
                        result = JSON.parse(JSON.stringify(result));
                        console.log(result);
                        const row = result[1];
                        if (row.length > 0) {
                            console.log(row[0].t_name, row[0].popl);
                            res.send({
                                "name": row[0].t_name,
                                "population": row[0].popl,
                            });
                        } else {
                            res.send("no matches found for " + req.body.tribe_name);
                        }
                    } catch(err) {
                        console.error(err);
                    }
                }
            });
        } else {
            console.log("no body");
        }
    } catch {
        console.log("ded");
    }
});

module.exports = router;