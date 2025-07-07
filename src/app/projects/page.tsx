'use client'

import ContainerMotion from '@/components/ContainerMotion'
import Page from '@/components/Page'
import { useLanguage } from '@/context/LanguageContext'
import { projects } from '@/data/projects'

import { Carousel } from '@mantine/carousel'
import { Image } from '@mantine/core'

import { Press_Start_2P } from 'next/font/google'

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
})

export default function Projects() {
  const { content } = useLanguage()

  const data = projects.map((project) => ({
    ...project,
    description: content.projects[project.key].description,
  }))

  console.log(data)

  return (
    <Page>
      {data.reverse().map((p) => (
        <div key={p.id} className="">
          <ContainerMotion>
            <div className="w-full">
              <Carousel
                classNames={{
                  indicator:
                    'w-[18px] h-[8px] bg-[rgba(255,232,117,1)] border-[1px] border-solid border-[rgb(0,0,0)] transition-[width] duration-[250ms] ease-in-out data-[active=true]:w-[40px]',
                }}
                withIndicators
                withControls={false}
                slideGap="md"
                height={300}
                emblaOptions={{
                  loop: true,
                  dragFree: true,
                  align: 'center',
                }}
              >
                {p.img.map((url) => (
                  <Carousel.Slide key={url}>
                    <Image
                      src={url}
                      alt={`${p.name} screenshot`}
                      height={300}
                      className={`w-full object-center h-[300px] rounded-md ${p.img.length > 1 ? 'cursor-grab' : ''}`}
                    />
                  </Carousel.Slide>
                ))}
              </Carousel>
            </div>
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-2">
                <h2 className={`text-xl font-bold ${pressStart2P.className}`}>{p.name}</h2>
                <a
                  href={p.repo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-sm text-blue-400 underline hover:text-blue-600 transition-colors"
                >
                  {content.projects.repository}
                </a>
              </div>
              <p className="text-lg mb-2">{p.description}</p>

              <p className="text-base mt-2">{content.projects.tech}</p>
              <ul className="flex flex-wrap gap-2">
                {p.tec.map((tec) => (
                  <li
                    key={tec}
                    className="inline-block font-bold p-2 border-2 border-gray-800 text-sm text-gray-400 transition-colors hover:bg-white hover:text-black rounded-lg"
                  >
                    {tec}
                  </li>
                ))}
              </ul>
            </div>
          </ContainerMotion>
        </div>
      ))}
    </Page>
  )
}
