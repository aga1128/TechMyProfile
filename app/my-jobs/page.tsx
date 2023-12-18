import React from 'react'
import SectionTitle from '../components/SectionTitle'
import FlexItemBox from '../components/FlexItemBox'

export default function MyJobs() {
  return( 
    <main className="max-w-[1920px] py-20">
      <section className="my-20">
        <SectionTitle title="My-Jobs" />
        <FlexItemBox src="/image/icon.png" />
        <div className="flex justify-center gap-8 items-start p-10">

        </div>
      </section>
    </main>
  )
}