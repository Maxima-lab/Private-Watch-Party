import express from "express";
import fetch from "node-fetch";  // ES Module import
import cors from "cors";  // Import CORS middleware

const app = express();
app.use(cors());  // Enable CORS for all origins (you can specify a domain if needed)

app.get("/movie/:tmdbId", async (req, res) => {
    const { tmdbId } = req.params;
    const apiUrl = `https://2embed.cc/embed/movie/tmdb/${tmdbId}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.text();  // Get HTML content (which includes the embed)
        res.send(data);  // Send the embed code directly to frontend
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch movie data" });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
