import axios from 'axios';
console.log(process.env.YT_API_KEY);
console.log(process.env.TEST);

const request = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    // key: process.env.YT_API_KEY,
    // key: 'AIzaSyDNPtj0FB3PkV8ZCVZr8aVFupPhV8T3WDA', //youtube-clone-app
    key: 'AIzaSyCxraKPBlrMcBQT2Wwaj5W82uBlON4xtA4', //youtube-clone-app-v2
  },
});

export default request;
