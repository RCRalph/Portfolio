const fs = require("fs");

if (fs.existsSync("./dist")) {
    fs.rmSync("./dist", { recursive: true });
}