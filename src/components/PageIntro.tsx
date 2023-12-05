import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Button } from './Button'

export function PageIntro({
  title,
  children,
  centered = false,
  ppt,
  paper
}: {
  title: string
  children: React.ReactNode
  ppt?: string
  paper?: string
  centered?: boolean
}) {
  return (
    <Container
      className={clsx('mt-24 sm:mt-32 lg:mt-40', centered && 'text-center')}
    >
      <FadeIn>
        {paper && <div className='my-2'>
          <Button
            download={paper}
          >
            주보 다운로드
          </Button>
        </div>}
        {ppt && <div className='my-2'>
          <Button
            download={ppt}
          >
            ppt 다운로드
          </Button>
        </div>}
      </FadeIn>
    </Container>
  )
}
