import axios from 'axios'

export const api = {
    fetchVideos(value) {
        return axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${value}&type=video&key=AIzaSyDYHTm0YMsvO258SlFP22RFzF-WbAVR1Fo`).then(response => {
            return response.data
        })
    },
    fetchVideosBySavedQuery(max, sort, currentQuery) {
        return axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${currentQuery}&maxResults=${max}&type=video&videoType=${sort}&key=AIzaSyDYHTm0YMsvO258SlFP22RFzF-WbAVR1Fo`).then(response => {
            return response.data
        })
    }
}