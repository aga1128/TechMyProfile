import React from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { markdownString } from '../../data/markdown'

// import styles from './page.module.css'
import { client } from '../../libs/client'

const id = async() => {
  const data = await client.get({
    endpoint: 'blog',
  })
  return (
    // <main className="max-w-[1920px] pt-20">
    //   <section className="my-20">
    //     <ReactMarkdown remarkPlugins={[remarkGfm]}>{ markdownString.nestjs }</ReactMarkdown>
    //   </section>
    // </main>
    <>
      <main>
        <div>{data.contents.title}</div>
      </main>
    </>
  )
}

export default id