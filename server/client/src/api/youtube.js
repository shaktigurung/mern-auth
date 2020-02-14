import axios from 'axios';

const KEY = 'AIzaSyDvjBKRAT4JGBPHGVs_Me8nzBSnCBZubwE';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});