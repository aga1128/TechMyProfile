import React from 'react';
import SectionTitle from '../components/SectionTitle';
import PostItems from '../components/Post/PostItems';
import { getListApp } from "../libs/microcms";

//キャッシュを利用しない
export const revalidate = 0;

export default async function MyApps() {
  const { contents } = await getListApp();
  if (!contents || contents.length === 0) {
    return <h1 className="flex justify-center items-center min-h-screen">No contents</h1>;
  }


  return( 
    <main className="max-w-[1920px] pt-20 min-h-screen">
      <section className="mt-10">
        <SectionTitle title="My-Apps" />
        <PostItems contents={ contents } path="my-apps" />
      </section>
    </main>
  )
}