import React from 'react'
import Image from 'next/image'
type Props = {
  id: number;
  src: string;
  alt: string;
  description: string;
  path: string;
  style: {
    width: number;
    height: number;
  }
}

const FlexItemBox = ({ id, src, alt, description, path, style }: Props) => {
  const ref = `${path}/${id}`;
  return (
    <a href={ ref } className="block flex flex-col justify-center items-center w-[calc(50%_-_2rem)] rounded-xl-bottom">
      <div className="flex justify-center items-center w-full h-[200px] p-10 bg-sub-color">
      <Image 
        src={ src }
        alt={ alt }
        width={ style.width }
        height={ style.height }
      />
      </div>
      <div className="w-full bg-header-color rounded-xl-bottom p-4">
        <p>
          { description }
        </p>
      </div>
    </a>
  )
}

export default FlexItemBox