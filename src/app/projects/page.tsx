'use client'

import Page from '@/components/Page'
import RotatingLines from '@/components/RotatingLines'
import { Carousel } from '@mantine/carousel'
import { Image } from '@mantine/core'

const projects = [
  {
    id: 1,
    name: 'Bamboo 🎋',
    description:
      'Plataforma voltada para a gestão de agendamentos, postagens e horários com uma psicóloga. foi desenvolvido como parte da disciplina de Engenharia de Software, sob requisito do professor e com foco na comunidade do campus IFPE.',
    repo_url: 'https://github.com/leandroxzq/bamboo',
    tec: ['React', 'JavaScript', 'Material UI', 'SCSS', 'Node.js', 'Express', 'MySQL', 'JWT'],
    img: [
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    ],
  },
  {
    id: 2,
    name: 'Furiabot 🖤',
    description:
      'Aplicação desenvolvida como proposta para o Desafio #1: Experiência Conversacional da FURIA. O projeto combina um chatbot inteligente, chat em tempo real entre fãs e informações atualizadas do time de CS da FURIA.',
    repo_url: 'https://github.com/leandroxzq/desafio-furia',
    tec: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    img: [
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    ],
  },
]

export default function Projects() {
  return (
    <Page>
      {projects
        .slice()
        .reverse()
        .map(({ id, name, description, repo_url, tec, img }) => (
          <div key={id} className="relative rounded-lg bg-gray-900 text-white">
            <div className="relative w-full">
              <Carousel
                withIndicators
                height={300}
                emblaOptions={{
                  loop: true,
                  dragFree: false,
                  align: 'center',
                }}
              >
                {img.map((url) => (
                  <Carousel.Slide key={url}>
                    <Image
                      src={url}
                      alt={`${name} screenshot`}
                      width={800}
                      height={300}
                      className="w-full h-[300px] object-cover rounded-md"
                    />
                  </Carousel.Slide>
                ))}
              </Carousel>
            </div>
            <div className="p-4 space-y-6">
              <h2 className="text-xl font-bold">{name}</h2>
              <p className="text-sm mb-2">{description}</p>
              <a
                href={repo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-600 transition-colors"
              >
                Repositório no GitHub
              </a>
              <p className="text-sm mt-2">Tecnologias utilizadas:</p>
              <ul>
                {tec.map((tec) => (
                  <li
                    key={tec}
                    className="inline-block font-bold mr-2 p-2 border-2 border-gray-800 text-sm text-gray-400 transition-colors hover:bg-white hover:text-black rounded-lg"
                  >
                    {tec}
                  </li>
                ))}
              </ul>
            </div>
            <RotatingLines />
          </div>
        ))}
    </Page>
  )
}
