/** @type {import('next').NextConfig} */
const path = require('path');
// const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    APIURL: 'http://192.168.0.164:8080/api/v1',
    url: 'https://api.themoviedb.org/3',
    key: 'eb2e208e412583b3377f26c2f126e16b',
    token:
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjJlMjA4ZTQxMjU4M2IzMzc3ZjI2YzJmMTI2ZTE2YiIsInN1YiI6IjY0ZmQ5YjU5ZWZlYTdhMDBlMDMzZWRhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WireFmF87ufna2eFiWOYJdNe-fd1nLnR8kzTRSgnTbQ',
  },
};

module.exports = nextConfig;
