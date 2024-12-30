import React from 'react';
import { notFound } from "next/navigation";
import { getDetail, getListApp } from "../../libs/microcms";
import parse from "html-react-parser";

export const revalidate = 0;

//ブログ記事一覧からidを取得
export async function generateStaticParams() {
 const { contents } = await getListApp();
 const paths = contents.map((post) => {
  return {
   postId: post.id,
  };
 });

 return [...paths];
}

//ルートのパラメータと一致する記事を取得
export default async function StaticDetailPage({ params: { postId } }: { params: { postId: string } }) {
 const post = await getDetail(postId);

 if (!post) {
  notFound();
 }

 return (
  <main className="max-w-[1920px] pt-20">
    <section className="my-20">
      <div className="max-w-[700px] w-full mx-auto max-md:w-[90%]">
        <h1 className="prose text-2xl font-bold mb-20 max-md:text-xl">{ post.title }</h1>
        <div className="prose max-w-[700px] w-full">{ parse( post.body ) }</div>
      </div>
    </section>
  </main>
 );
}