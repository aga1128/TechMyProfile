import React from 'react'
import Image from 'next/image'
type Props = {
  src: string;
}

const FlexItemBox = ({src}: Props) => {
  return (
    <div>
      <div>
        <Image 
          src={src}
          alt=""
          width={50}
          height={50}
        />
      </div>
    </div>
  )
}

export default FlexItemBox