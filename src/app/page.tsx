import { Press_Start_2P } from 'next/font/google'

import Nav from '@/components/Nav'
import Stacks from '@/components/Stacks'
import Avatar from '@/components/Avatar'
import ButtonLanguage from '@/components/ButtonLanguague'

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
})

export default function Home() {
  return (
    <article className="center min-h-dvh select-none gap-6">
      <div className="flex flex-col gap-4 md:flex-row">
        <section
          className={`order-2 flex max-w-80 select-text flex-col justify-evenly gap-4 md:order-1 ${pressStart2P.className}`}
        >
          <Stacks />
          <Nav />
          <ButtonLanguage />
        </section>
        <section className="order-1 flex flex-col items-center gap-2 md:order-2">
          <Avatar />
        </section>
      </div>
    </article>
  )
}
