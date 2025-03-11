import SectionTitle from './components/SectionTitle';
import Profile from './components/Profile/Profile';
import Contents from './components/Profile/Contents';
import IntersectionObserver from './components/IntersectionObserver';
import Image from 'next/image'

export default function Home() {

  const likesItem = [
    {
      title: "将棋",
      description: "幼い頃に父から教わった。小学生の時に大会にも出たことがあります。現在もネット対局や、将棋観戦を楽しんでいます。目標は初段をとる事です。",
      image: {
        url: "/images/shogi.png",
        width: 842,
        height: 842,
        alt: "将棋"
      }
    },
    {
      title: "アプリ開発",
      description: "分からないことだらけで大変な時もありますが、それ以上に、自分が努力して作り上げたものがWeb上に公開されたときの達成感や、少しずつスキルアップしている実感がたまりません。",
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
        width: 1417,
        height: 1276,
        alt: "読書"
      }
    }
  ]
  return( 
    <main className="max-w-[1920px] pt-[98px] min-h-screen">
      <section className="mb-30">
        <div className="flex justify-center items-center p-16 bg-main-color text-center max-md:flex-col">
          <div className="w-[300px] max-md:mb-4">
            <h1 className="text-gray-50 text-5xl font-bold max-md:text-4xl">Portfolio</h1>
            <span className="text-gray-50 text-2xl max-md:text-lg">It&apos;s&nbsp;Me</span>
          </div>
          <Image src="/images/portfolio.png" alt="メイン画像" width={300} height={300} className="w-[300px] h-auto max-md:w-[200px]"/>
        </div>
      </section>
      <section className="my-10 max-md:mb-10">
        <SectionTitle title="About" />
        <IntersectionObserver>
          <Profile />
        </IntersectionObserver>
      </section>
      <section className="my-10 max-md:my-10">
        <SectionTitle title="Likes" />
        <Contents items={likesItem}/>
      </section>
    </main>
  )
}
