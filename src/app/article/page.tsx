import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import logoBrightPath from '@/images/clients/bright-path/logo-dark.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-dark.svg'
import logoGreenLife from '@/images/clients/green-life/logo-dark.svg'
import logoHomeWork from '@/images/clients/home-work/logo-dark.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-dark.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-dark.svg'
import logoPhobia from '@/images/clients/phobia/logo-dark.svg'
import logoUnseal from '@/images/clients/unseal/logo-dark.svg'
import { formatDate } from '@/lib/formatDate'
import articles from './article.json'

interface IArticle {
  title: string
  img: string
  quo_txt01: string
  date: string
  content: string
  link: string
}

function Article({
  articles,
}: {
  articles: Array<IArticle>
}) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Article
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-14 sm:space-y-14 lg:space-y-14">
        {articles.map((article, index) => (
          <FadeIn key={article.link}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-14">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={article.img}
                      width={150}
                      height={80}
                      alt=""
                      className="h-auto w-full flex-none rounded-xl"
                      unoptimized
                    />
                  </div>
                  
                </div>
                
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                <div className="mt-1 mb-2 ml-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="font-nanum text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={article.date}>
                        {formatDate(article.date)}
                      </time>
                    </p>
                  </div>
                  <p className="font-display text-4xl font-medium text-neutral-950 font-nanum">
                    <Link href={`/article/${index}`}>{article.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600 font-nanum">
                    <p >{article.quo_txt01}</p>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const clients = [
  ['Phobia', logoPhobia],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]


export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default async function Work() {
  return (
    <>
      <Article articles={articles} />
    </>
  )
}
