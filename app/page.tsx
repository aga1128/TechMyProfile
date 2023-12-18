import Image from 'next/image'
import SectionTitle from './components/SectionTitle'

export default function Home() {
  return( 
    <main className="max-w-[1920px] pt-20">
      <section className="my-20">
        <SectionTitle title="About" />
        <div className="flex justify-center gap-8 items-center p-10">
          <div>
            <Image
              src="/images/profile.png"
              alt=""
              width={100}
              height={100}
              className="rounded-[50%] object-cover w-[100px] h-[100px]"
            />
          </div>
          <div className="max-w-[500px]">
            <p className="pb-2 text-2xl">阿川&nbsp;俊生<small>(Agawa&nbsp;Toshiki)</small></p>
            <div>
              <p>
                広島県在住の28歳。<br />
                昔から考えて答えを導くことが好きで、プログラミングというワードに惹かれHTML/CSSの学習を始める。<br />
                現在はWebエンジニアを目指してフロントエンドはNext.js・React・Vue、バックエンドはNestJS・Expressと幅広く学習を進めています。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-20">
        <SectionTitle title="Likes" />
        <div className="flex justify-center gap-8 items-start p-10">
          <div className="flex flex-col justify-center items-center w-[500px] p-10">
            <p className="mb-8">アプリ開発</p>
            <div>
              <p className="break-all">
                分からない事だらけで大変な時もある。だけどそれ以上に自分が努力して作ったものが実際にWeb上に載ると達成感が凄い。デプロイする瞬間が一番好き。
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-[500px] p-10">
            <p className="mb-8">将棋</p>
            <div>
              <p className="break-all">
                永遠に無料で楽しめる運が絡まない盤上ゲーム！<br />
                幼い頃に父から教わって小学生の時に大会にも出たことがある。
                現在もネット対局や、将棋観戦などを楽しんでいます。
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-[500px] p-10">
            <p className="mb-8">PCゲーム</p>
            <div>
              <p className="break-all">
                仲の良い友達とやる究極の息抜き。<br />
                よく遊ぶジャンルはFPS。やりすぎ注意。</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
