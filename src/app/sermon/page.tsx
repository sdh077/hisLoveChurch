import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { supabase } from '@/lib/api'
import Pagination from './pagination'

const pageSize = 5
export const metadata: Metadata = {
  title: 'Sermon',
  description:
    '주일 설교 말씀',
}
const getData = async (pageNo: number) => {
  const end = pageNo * pageSize - 1
  return await supabase.from('archive').select().range(0, end).order('id', { ascending: false })
}
export default async function Blog({ searchParams: { page } }: { searchParams: { page: string } }) {
  const pageNo = Number(page ?? 1)
  const { data, error } = await getData(pageNo)
  if (data)
    return (
      <>
        <Container className="mt-20">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Sermon
            </h2>
          </FadeIn>
          <div className="mt-10 space-y-14 sm:space-y-14 lg:space-y-14">
            {data && data.map((article) => (
              <FadeIn key={article.id}>
                <article>
                  <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-14">
                    <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                      <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                        <img
                          alt=""
                          src={`https://i.ytimg.com/vi/${article.link}/hqdefault.jpg`}
                          className="object-cover  sm:w-full lg:w-full"
                        />
                      </div>

                    </div>

                    <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                      <div className="mt-1 mb-2 ml-1 flex gap-x-4 sm:mt-0 lg:block">
                        <p className="font-nanum text-sm text-neutral-950 lg:mt-2">
                          <time dateTime={article.date}>
                            {article.play_dt ? formatDate(article.play_dt) : ''}
                          </time>
                        </p>
                      </div>
                      <p className="font-display text-2xl font-medium text-neutral-950 font-nanum">
                        {article.title}
                      </p>
                      <div className="mt-6 space-y-6 text-base text-neutral-600 font-nanum">
                        <Button
                          href={`/sermon/${article.id}`}
                          aria-label={`Read more: ${article.title}`}
                          className="mt-8 mr-2"
                        >
                          자세히 보기
                        </Button>
                        <Button
                          href={`https://www.youtube.com/watch?v=${article.link}`}
                          aria-label={`Read more: ${article.title}`}
                          className="mt-8"
                        >
                          youtube 방문
                        </Button>                      </div>
                    </div>
                  </Border>
                </article>
              </FadeIn>
            ))}
            <div className="flex justify-center">
              {((pageNo) * pageSize <= data.length) && <FadeIn>
                <Pagination pageNo={Number(pageNo ?? 1)} />
              </FadeIn>}
            </div>

          </div>
        </Container>
        {/* <Container className="mt-24 sm:mt-32 lg:mt-40">
          <div className="space-y-24 lg:space-y-32">
            {data && data.map((article) => (
              <FadeIn key={article.id}>
                <article>
                  <Border className="py-16">
                    <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                      <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                        <h2 className="font-display text-2xl font-semibold text-neutral-950">
                          <Link href={`/sermon/${article.id}`}>{article.title}</Link>
                        </h2>
                        <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                          <dt className="sr-only">Published</dt>
                          <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                            <time dateTime={article.date}>
                              {article.play_dt ? formatDate(article.play_dt) : ''}
                            </time>
                          </dd>
                          <dt className="sr-only">Author</dt>
                          <dd className="mt-6 flex gap-x-4">
                            <div className="overflow-hidden rounded-xl bg-neutral-100">
                              <img
                                alt=""
                                src={`https://i.ytimg.com/vi/${article.link}/hqdefault.jpg`}
                                className="object-cover  sm:w-full lg:w-64"
                              />
                            </div>
                          </dd>
                        </dl>
                        <p className="mt-6 max-w-2xl text-base text-neutral-600">
                          {article.description}
                        </p>
                        <Button
                          href={`/sermon/${article.id}`}
                          aria-label={`Read more: ${article.title}`}
                          className="mt-8 mr-2"
                        >
                          자세히 보기
                        </Button>
                        <Button
                          href={`https://www.youtube.com/watch?v=${article.link}`}
                          aria-label={`Read more: ${article.title}`}
                          className="mt-8"
                        >
                          youtube 방문
                        </Button>
                      </div>
                    </div>
                  </Border>
                </article>
              </FadeIn>
            ))}
            {((pageNo) * pageSize <= data.length) && <FadeIn>
              <Pagination pageNo={Number(pageNo ?? 1)} />
            </FadeIn>}
          </div>
        </Container> */}
        <ContactSection />
      </>
    )
}
