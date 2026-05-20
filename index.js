const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("API funcionando");
});

app.get("/instance/:id/files", (req, res) => {
    res.json([
        {
            path: "mods/test.jar",
            downloads: [
                "https://example.com/test.jar"
            ],
            size: 12345,
            hashes: {
                sha1: "abc123"
            }
        }
    ]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor iniciado");
});