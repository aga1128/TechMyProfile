import React from 'react'
import Image from 'next/image';

const Profile = () => {
  return (
    <div className="flex justify-center gap-8 items-center p-10 max-md:flex-col">
      <div>
        <Image
          src="/images/profile.png"
          alt="プロフィール画像"
          width={225}
          height={225}
          className="rounded-[50%] object-cover w-[150px] h-[150px]"
        />
      </div>
      <div className="max-w-[500px]">
        <p className="pb-2 text-2xl max-md:text-xl">阿川&nbsp;俊生<small>(Agawa&nbsp;Toshiki)</small></p>
        <div>
          <p>
            広島県在住の29歳。<br />
            昔から考えて答えを導くことが好きで、プログラミングというワードに惹かれHTML/CSSの学習を始める。<br />
            現在はWebエンジニアを目指してフロントエンドはNext.js・React・Vue、バックエンドはNestJS・Expressと幅広く学習を進めています。
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile