import axios from 'axios';

class ApiService {
    getData = async (data) => {
        const KEY = 'AIzaSyBM0WBlPOwd-cCdsDXMINf150sxqSpOQmM';
        const resp = axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                q: data,
                part: "snippet",
                maxResults: 5,
                key: KEY,
                type: 'video',
            }
        });
        return resp;
    }
}

export default ApiService;