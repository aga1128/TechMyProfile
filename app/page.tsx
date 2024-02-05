import SectionTitle from './components/SectionTitle';
import Profile from './components/Profile/Profile';
import Contents from './components/Profile/Contents';

export default function Home() {
  const likesItem = [
    {
      title: "将棋",
      description: "幼い頃に父から教わった。小学生の時に大会にも出たことがある。現在もネット対局や、将棋観戦などを楽しんでいます。",
      image: {
        url: "/images/shogi.png",
        width: 842,
        height: 842,
        alt: "将棋"
      }
    },
    {
      title: "アプリ開発",
      description: "分からない事だらけで大変な時もある。しかし、それ以上に自分が努力して作ったものが実際にWeb上に載ると達成感が凄い。デプロイする瞬間が一番好き。",
      image: {
        url: "/images/app.png",
        width: 1600,
        height: 985,
        alt: "パソコン作業の画像"
      }
    },
    {
      title: "読書",
      description: "Webや単行本でライトノベルを読むのが好きです。",
      image: {
        url: "/images/book.png",
        width: 929,
        height: 967,
        alt: "読書"
      }
    }
  ]
  return( 
    <main className="max-w-[1920px] pt-20 min-h-screen">
      <section className="my-20 max-md:mb-10">
        <SectionTitle title="About" />
        <Profile />
      </section>
      <section className="my-20 max-md:my-10">
        <SectionTitle title="Likes" />
        <Contents items={likesItem}/>
      </section>
    </main>
  )
}
