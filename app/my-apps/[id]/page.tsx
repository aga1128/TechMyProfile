import React from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { markdownString } from '../../data/markdown'

const id = () => {
  return (
    <main className="max-w-[1920px] pt-20">
      <section className="my-20">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{ markdownString.nestjs }</ReactMarkdown>
      </section>
    </main>
  )
}

export default id