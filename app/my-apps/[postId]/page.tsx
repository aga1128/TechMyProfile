import React from 'react'
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../libs/microcms";

export const revalidate = 0;

export async function generateStaticParams() {
 const { contents } = await getList();
 const paths = contents.map((post) => {
  return {
   postId: post.id,
  };
 });

 return [...paths];
}

export default async function StaticDetailPage({
 params: { postId },
}: {
 params: { postId: string };
}) {
 const post = await getDetail(postId);

 // ページの生成された時間を取得
 const time = new Date().toLocaleString();

 if (!post) {
  notFound();
 }
console.log(post.body)
 return (
  <div>
   <h1>{ post.title }</h1>
   <h2>{ time }</h2>
   <div>{ parse( post.body ) }</div>
  </div>
 );
}