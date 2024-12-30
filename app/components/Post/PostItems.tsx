import React from 'react'
import Link from 'next/link'
import { Blog } from '../../libs/microcms'
import PostImage from './PostImage'
import PostTitle from './PostTitle'

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
              className="flex flex-col justify-center items-center w-[calc(50%_-_2rem)] rounded-xl-bottom shadow-lg relative top-0 transition-all duration-200 ease-out hover:where:scale-[1.03] active:shadow-none active:scale-[.97] max-md:w-full"
            >
              <PostImage postImage={ post.eyecatch }/>
              <PostTitle postTitle={ post.title }/>
            </Link>
          );
        })}
    </div>
  )
}

export default PostItems