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
                "https://github.com/Gabrainiac/mc-mods/releases/download/mods/architectury-9.2.14-forge.jar"
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