import React from 'react'
import Image from 'next/image';

type Props = {
  items: {
    title: string;
    description: string;
    image: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }
  }[]
}

const Contents = ({ items }: Props) => {
  return (
    <div className="flex justify-center gap-8 items-start p-10 max-lg:flex-col max-lg:items-center max-lg:w-full">
      {items.map((item) => {
        return (
          <div key={ item.title } className="flex flex-col justify-center items-center max-w-[500px] w-full p-10">
            <p className="mb-8 text-lg">{ item.title }</p>
            <Image src={ item.image.url } alt={ item.image.alt } width={ item.image.width } height={ item.image.height } className="w-auto h-[150px] mb-8"/>
            <div>
              <p className="break-all">
                { item.description }
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Contents