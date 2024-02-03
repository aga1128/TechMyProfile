import React from 'react'
import Image from 'next/image'
import type {
  MicroCMSImage,
 } from "microcms-js-sdk";
 
type Props = {
  postImage: MicroCMSImage | undefined
}

const PostImage = ({ postImage }: Props) => {
  return (
    <div className="flex justify-center items-center w-full h-[200px] p-10 bg-sub-color">
      {(postImage) ? (
        <Image
          src={ postImage.url } 
          alt="Eyecatch Image"
          width={ postImage.width }
          height={ postImage.height }
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
  )
}

export default PostImage