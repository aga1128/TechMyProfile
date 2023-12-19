import React from 'react'
import SectionTitle from '../components/SectionTitle'

export default function MyJobs() {
  return( 
    <main className="max-w-[1920px] pt-20">
      <section className="my-20">
        <SectionTitle title="My-Jobs" />
        <div className="flex justify-between items-start flex-wrap gap-8 gap-y-8 max-w-[750px] mx-auto p-10">
        </div>
      </section>
    </main>
  )
}