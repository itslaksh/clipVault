import express from 'express';
import ytdl from 'ytdl-core';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 5000;

// YouTube Download Route
app.get('/download/youtube', async (req, res) => {
    const videoURL = req.query.url;
    if (!ytdl.validateURL(videoURL)) {
        return res.status(400).json({ error: 'Invalid YouTube URL' });
    }

    try {
        const info = await ytdl.getInfo(videoURL);
        const format = ytdl.chooseFormat(info.formats, { quality: 'highestvideo' });
        res.header('Content-Disposition', `attachment; filename="${info.videoDetails.title}.mp4"`);
        ytdl(videoURL, { format }).pipe(res);
    } catch (error) {
        console.error('Error downloading YouTube video:', error);
        res.status(500).json({ error: 'Failed to download YouTube video' });
    }
});

// Reddit Download Route
app.get('/download/reddit', async (req, res) => {
    const videoURL = req.query.url;
    try {
        const response = await axios.get(`${videoURL}.json`);
        const videoData = response.data[0].data.children[0].data;

        const redditVideoURL = videoData.media.reddit_video.fallback_url;
        res.redirect(redditVideoURL); // Redirect to the video URL for download
    } catch (error) {
        console.error('Error downloading Reddit video:', error);
        res.status(400).json({ error: 'Invalid Reddit URL or unable to fetch video' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
