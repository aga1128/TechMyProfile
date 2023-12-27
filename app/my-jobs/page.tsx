import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import SectionTitle from '../components/SectionTitle'
import { getListJob } from "../libs/microcms"

//キャッシュを利用しない
export const revalidate = 0;

export default async function MyJobs() {
  const { contents } = await getListJob();

  if (!contents || contents.length === 0) {
    return <h1 className="flex justify-center items-center min-h-screen">No contents</h1>;
   }

   contents.forEach((post) => {
    const maxLength = 48
    if (post.title.length > maxLength) {
      post.title = post.title.substring(0, maxLength) + "...";
    }
  });


  return( 
    <main className="max-w-[1920px] pt-20 min-h-screen">
      <section className="my-20">
        <SectionTitle title="My-Jobs" />
        <div className="flex justify-between items-start flex-wrap gap-8 gap-y-8 max-w-[750px] mx-auto p-10">
            {contents.map((post) => {
            return (
                <Link 
                  href={`/my-jobs/${post.id}`} 
                  key={ post.id }
                  className="block flex flex-col justify-center items-center w-[calc(50%_-_2rem)] rounded-xl-bottom max-md:w-full relative top-0 transition-all duration-200 ease-out hover:-top-[3px] hover:shadow-lg active:top-0 active:shadow-none"
                >
                  <div className="flex justify-center items-center w-full h-[200px] p-10 bg-sub-color">
                    {(post.eyecatch) ? (
                      <Image 
                        src={ post.eyecatch.url } 
                        alt="Eyecatch Image"
                        width={ post.eyecatch.width }
                        height={ post.eyecatch.height }
                        className="w-full max-w-[150px] h-auto"
                      />
                    ) : (
                      <Image 
                        src="/images/icon.png" 
                        alt="Eyecatch Image"
                        width={200}
                        height={200}
                      />
                    )}
                    
                  </div>
                  <div className="w-full h-20 bg-header-color rounded-xl-bottom p-4">
                    <p id="post-title" className="text-ellipsis overflow-hidden">
                      { post.title }
                    </p>
                  </div>
                </Link>
            );
            })}
        </div>
      </section>
    </main>
  )
}