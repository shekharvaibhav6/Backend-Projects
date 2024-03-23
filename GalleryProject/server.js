const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3010;
const unsplashAccessKey = 'm3zjPaJBEwc6Baap38PoGgwmU20LFOaTBlcuf13g4Ws';

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to fetch random images from Unsplash API
app.get('/api/images', async (req, res) => {
    try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
            params: {
                client_id: unsplashAccessKey,
                count: 30 // Number of random images to fetch
            }
        });
        const images = response.data.map(image => image.urls.regular);
        res.json(images);
    } catch (error) {
        console.error('Error fetching images from Unsplash:', error);
        res.status(500).json({ error: 'Failed to fetch images' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
