const axios = require('axios');

module.exports.getLocationImages = async (locationQuery, count = 3) => {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
            query: locationQuery,
            per_page: count,
            orientation: 'landscape'
        },
        headers: {
            Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
        }
    });

    return res.data.results.map(img => ({
        url: img.urls.regular,
        filename: `unsplash-${img.id}`
    }));
};