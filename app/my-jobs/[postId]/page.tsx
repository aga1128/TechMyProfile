import React from 'react';
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getListJob } from "../../libs/microcms";

export const revalidate = 0;

export async function generateStaticParams() {
 const { contents } = await getListJob();
 const paths = contents.map((post) => {
  return {
   postId: post.id,
  };
 });

 return [...paths];
}

export default async function StaticDetailPage({ params: { postId } }: { params: { postId: string } }) {
 const post = await getDetail(postId);

 if (!post) {
  notFound();
 }

 return (
  <main className="max-w-[1920px] pt-20">
    <section className="my-20">
      <div className="max-w-[800px] w-full mx-auto max-lg:w-[90%]">
        <h1 className="prose text-2xl font-bold mb-20 max-md:text-xl">{ post.title }</h1>
        <div className="prose max-w-[800px] w-full">{ parse( post.body ) }</div>
      </div>
    </section>
  </main>
 );
}