const express = require("express");
const app = express();

app.use(express.json());

/*
    ROOT
*/
app.get("/", (req, res) => {
    res.send("Mandalord API funcionando");
});

/*
    PROFILES
*/
app.get("/profiles", (req, res) => {
    res.json([
        {
            id: 1,
            slug: "survival",
            name: "Survival",
            minecraftVersion: "1.20.1",
            loader: "forge",
            loaderVersion: "47.2.0",
            isDefault: true,

            background:
                "https://images.unsplash.com/photo-1607853202273-797f1c22a38e",

            icon:
                "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
        }
    ]);
});

/*
    NEWS
*/
app.get("/news", (req, res) => {
    res.json([
        {
            id: 1,
            title: "Bienvenido a Mandalord",
            content: "Launcher funcionando correctamente.",
            category: "general",
            createdAt: new Date()
        }
    ]);
});

/*
    NEWS CATEGORIES
*/
app.get("/news/categories", (req, res) => {
    res.json([
        {
            slug: "general",
            name: "General"
        }
    ]);
});

/*
    MAINTENANCE
*/
app.get("/maintenance", (req, res) => {
    res.json(null);
});

/*
    BACKGROUND
*/
app.get("/background", (req, res) => {
    res.json({
        url: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e"
    });
});

/*
    BOOTSTRAPS
*/
app.get("/bootstraps", (req, res) => {
    res.json({
        version: "1.0.0",
        files: []
    });
});

/*
    INSTANCE FILES
*/
app.get("/instance/:id/files", (req, res) => {
    res.json([
        {
            path: "mods/architectury.jar",

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
    console.log("Servidor iniciado en puerto " + PORT);
});