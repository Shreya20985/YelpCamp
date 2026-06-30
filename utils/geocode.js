const axios = require('axios');

module.exports.geocodeLocation = async (locationQuery) => {
    const res = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
            q: locationQuery,
            format: 'json',
            limit: 1,
            countrycodes: 'in' // restrict results to India
        },
        headers: {
            'User-Agent': 'CampgroundBookingApp/1.0' // Nominatim requires this
        }
    });

    if (!res.data.length) {
        return null; // location not found
    }

    return {
        lat: parseFloat(res.data[0].lat),
        lng: parseFloat(res.data[0].lon)
    };
};