import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
 } from "microcms-js-sdk";

 export type Blog = {
  id: string;
  title: string;
  body: string;
  category: string;
  eyecatch?: MicroCMSImage;
 } & MicroCMSDate;

 if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
 }
 
 if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
 }

 export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN as string,
  apiKey: process.env.MICROCMS_API_KEY as string,
 });

 export const getListApp = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
   endpoint: "blog",
   queries: {
    fields: "id,title,body,eyecatch",
    filters: "category[equals]app",
    },
  });
  return listData;
}

export const getListJob = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
   endpoint: "blog",
   queries: {
    fields: "id,title,body,eyecatch",
    filters: "category[equals]job",
    },
  });
  return listData;
}

export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
 ) => {
  const detailData = await client.getListDetail<Blog>({
   endpoint: "blog",
   contentId,
   queries,
  });
 
  return detailData;
 };