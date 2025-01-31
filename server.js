import express from "express";
import fetch from "node-fetch";  // ES Module import
import cors from "cors";  // Import CORS middleware

const app = express();
app.use(cors());  // Enable CORS for all origins (you can specify a domain if needed)

app.get("/movie/:imdbId", async (req, res) => {
    const { imdbId } = req.params;

    // Example of IMDb ID to HLS stream mapping
    let streamUrl = '';

    if (imdbId === 'tt0111161') {  // Example IMDb ID for Shawshank Redemption
        streamUrl = 'https://guru-hls-stream.m3u8';  // Replace with actual Guru HLS URL
    } else if (imdbId === 'tt0068646') {  // Example IMDb ID for The Godfather
        streamUrl = 'https://ghost-hls-stream.m3u8';  // Replace with actual Ghost HLS URL
    } else if (imdbId === 'tt0133093') {  // Example IMDb ID for The Matrix
        streamUrl = 'https://fastx-hls-stream.m3u8';  // Replace with actual FastX HLS URL
    } else {
        return res.status(404).json({ error: "Movie not found" });
    }

    // Send the stream URL to frontend
    res.json({ streamUrl });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
