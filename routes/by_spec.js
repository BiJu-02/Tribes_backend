const express = require("express");

const router = express.Router();

router.get("/by_spec", async (req, res) => {
    let que = "";
    await global.db.query(que, (err, result, fields) => {
        if (err) { console.log(err); }
        else {
            
            res.send("");
        }
    });
});

module.exports = router;