import { Container } from '@/components/Container'
import Image from 'next/image'

import articles from '../article.json'
import { Button } from '@/components/Button'
import Link from 'next/link'

export default function page({ params: { id } }: { params: { id: number } }) {
    const article = articles[id]
    if (article)
        return (
            <Container>
                <div className='[&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0'>
                    <Image
                        src={article.img}
                        width={1000}
                        height={800}
                        alt=""
                        style={{ borderTopLeftRadius: '40px', borderTopRightRadius: '40px' }}
                        className="h-full w-full flex-none my-10"
                        unoptimized
                    />
                    <div className='font-nanum text-xs' dangerouslySetInnerHTML={{ __html: article.date }}></div>
                    <div className='text-slate-950 text-4xl mt-2 mb-7' dangerouslySetInnerHTML={{ __html: article.title }}></div>
                    <div className='font-nanum break-all' dangerouslySetInnerHTML={{ __html: article.content }}></div>
                </div>
                <div className='flex justify-between flex-row-reverse'>
                    {articles.length - 1 > id && <Link href={`/article/${Number(id ?? 0) + 1}`}><Button>다음</Button></Link>}
                    {id > 0 && <Link href={`/article/${Number(id ?? 0) - 1}`}><Button>이전</Button></Link>}
                </div>
            </Container>
        )
}
