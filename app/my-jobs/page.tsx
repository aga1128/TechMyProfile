import React from 'react'
import SectionTitle from '../components/SectionTitle'
import PostItems from '../components/Post/PostItems'
import { getListJob } from "../libs/microcms"

//キャッシュを利用しない
export const revalidate = 0;

export default async function MyJobs() {
  const { contents } = await getListJob();

  if (!contents || contents.length === 0) {
    return <h1 className="flex justify-center items-center min-h-screen">No contents</h1>;
   }


  return( 
    <main className="max-w-[1920px] pt-20 min-h-screen">
      <section className="mt-10">
        <SectionTitle title="Jobs" />
        <PostItems contents={ contents } path="my-jobs" />
      </section>
    </main>
  )
}