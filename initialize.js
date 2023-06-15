const fs = require("fs");


module.exports = async () => {
    let db_exists = false;
    await global.db.query("SHOW DATABASES;", async (err, res, fields) => {
        const table = JSON.parse(JSON.stringify(res));
        console.log(table);
        for (const row of table) {
            if (row.Database == "tribe_legacy") {
                console.log("database exists");
                db_exists = true;
                break;
            }
        }
        if (!db_exists) {
            const que1 = fs.readFileSync("./sql/initial_ddl.sql").toString();
            await global.db.query(que1, (err) => {
                if (err) { console.log(err); }
                else { console.log("database created"); }
            });
            const que2 = fs.readFileSync("./sql/initial_dml.sql").toString();
            await global.db.query(que2, (err) => {
                if (err) { console.log(err); }
                else { console.log("values added"); }
            })
        }
    });
    
}