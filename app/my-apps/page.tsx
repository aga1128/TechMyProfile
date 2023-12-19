import React from 'react'
import SectionTitle from '../components/SectionTitle'
import FlexItemBox from '../components/FlexItemBox'
import { myAppItem } from '../data/myAppData'

export default function MyApps() {

  return( 
    <main className="max-w-[1920px] pt-20">
      <section className="my-20">
        <SectionTitle title="My-Apps" />
        <div className="flex justify-between items-start flex-wrap gap-8 gap-y-8 max-w-[750px] mx-auto p-10">
          {myAppItem.map((item) => (
            <FlexItemBox 
              key={ item.id }
              id={ item.id }
              src={ item.src }
              alt={ item.alt }
              description={ item.description }
              path={ item.path }
              style={ item.style }
            />
          ))}
        </div>
      </section>
    </main>
  )
}