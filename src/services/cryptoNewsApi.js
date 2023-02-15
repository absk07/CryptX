import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.NEWS_RAPID_API_KEY
}
const baseUrl = process.env.process.env.NEWS_API_BASE_URL;

const createRequest = (url) => ({ url, headers });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (count) => createRequest(`/news/top/${count}`)
        })     
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;