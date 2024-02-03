import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Blog } from '../libs/microcms'

type PropsItems = {
  contents: Blog[];
  path: string;
}


const PostItems = ({ contents, path }: PropsItems) => {
  return (
    <div className="flex justify-between items-start flex-wrap gap-8 gap-y-8 max-w-[750px] mx-auto p-10">
        {contents.map((post) => {
          return (
            <Link 
              href={`/${path}/${post.id}`} 
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
                    className="w-full max-w-[150px] h-auto"
                  />
                )}
              </div>
              <div className="w-full h-20 bg-header-color rounded-xl-bottom p-4">
                <p id="post-title" className="line-clamp-2">
                  { post.title }
                </p>
              </div>
            </Link>
          );
        })}
    </div>
  )
}

export default PostItems