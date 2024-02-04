import SectionTitle from './components/SectionTitle';
import Profile from './components/Profile/Profile';
import Contents from './components/Profile/Contents';

export default function Home() {
  const likesItem = [
    {
      title: "将棋",
      description: "幼い頃に父から教わった。小学生の時に大会にも出たことがある。現在もネット対局や、将棋観戦などを楽しんでいます。"
    },
    {
      title: "アプリ開発",
      description: "分からない事だらけで大変な時もある。しかし、それ以上に自分が努力して作ったものが実際にWeb上に載ると達成感が凄い。デプロイする瞬間が一番好き。"
    },
    {
      title: "読書",
      description: "Webや単行本でライトノベルを読むのが好きです。"
    }
  ]
  return( 
    <main className="max-w-[1920px] pt-20 min-h-screen">
      <section className="my-20 max-md:mb-10 bg-red-100">
        <SectionTitle title="About" />
        <Profile />
      </section>
      <section className="my-20 max-md:my-10 bg-gray-100">
        <SectionTitle title="Likes" />
        <Contents items={likesItem}/>
      </section>
      <section className="my-20 max-md:my-10">
        <SectionTitle title="Values" />
        <Contents items={likesItem}/>
      </section>
    </main>
  )
}
