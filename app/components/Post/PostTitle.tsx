import React from 'react'

type Props = {
  postTitle: string;
}

const PostTitle = ({ postTitle }: Props) => {
  return (
    <div className="w-full h-20 bg-yellow-200 rounded-xl-bottom p-4">
      <p id="post-title" className="line-clamp-2">
        { postTitle }
      </p>
    </div>
  )
}

export default PostTitle