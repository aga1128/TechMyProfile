import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'its-blog',
  apiKey: process.env.API_KEY,
});