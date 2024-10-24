
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
import imageGospel from '@/images/gosple.jpeg'
import imageDisciple from '@/images/disciple.png'
import imageCommunity from '@/images/community.jpeg'
import imageWorld from '@/images/world.jpeg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[28rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display  text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="복음" image={{ src: imageGospel }}>
      <div className="space-y-6 text-base font-nanum text-neutral-600">
        <p>
          복음이라는 말의 뜻은{' '}
          <strong className="font-semibold text-neutral-950">기쁜 소식</strong> 입니다.<br />
          복음이 기쁜 소식인 이유는 인간이 절망의 상황에 빠져 있다는 것을 전제합니다. <br />
          하나님과 멀어진체로 태어난 인간은 죽음과 죄와 허무의 문제를 극복할 수 없습니다. <br />
        </p>
        <p>
          인간이 할 수 없기에 예수 그리스도께서 인간이 되셔서 우리를 대신하여 행하신 모든 일을 믿음을 때 죽음과 죄와 허무의 문제를 극복할 수 있다는 것이 우리에게 ‘기쁜 소식’이 됩니다. <br />
          그 사랑교회는 그 복음이 우리의 삶의 모든 것을 변화시킨다는 믿음을 가지고 있습니다.
        </p>
      </div>
    </Section>
  )
}

function Build() {
  return (
    <Section title="제자" image={{ src: imageDisciple, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600 font-nanum">
        <p>
          예수님이 이 땅에 오신 이유는 단순히 한 개인을 죄에서 구원하여 천국으로 옮기는 것만이 아닙니다. 예수님은 이 땅에서 제자를 삼으셔서 교회를 세우셨습니다.
        </p>
        <p>
          우리를 당장 천국으로 인도하지 않으시고 이 땅에 살게하신 이유는 이 땅에서 우리가 해야 할 사명이 있기 때문입니다.
        </p>
        <p>
          그 첫 번째는 <strong className="font-semibold text-neutral-950">예수님을 닮아가는 삶</strong>입니다. 그 사랑교회는 다양한 양육과 훈련을 통해 삶의 전반에서 예수 그리스도를 닮아가는 것을 목표로 살아가고 있습니다.
        </p>
      </div>

      {/* <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote> */}
    </Section>
  )
}


function Deliver() {
  return (
    <Section title="공동체" image={{ src: imageCommunity, shape: 2 }}>
      <div className="font-nanum space-y-6 text-base text-neutral-600">
        <p>
          교회 공동체는 이 땅에 속해서 살고 있지만 또한 하늘에 속한 이중적 정체성을 가진 곳입니다.
          하나님의 뜻이 이 땅 가운데 이루어지는 통로이며, 하나님의 은혜가 세상으로 흘러가는 파이프 라인입니다.
        </p>
        <p>
          예수님은 너희가 서로 사랑하면 너희가 내 제자인 것을 세상이 알게 될 것이라고 말씀하셨습니다.
        </p>
        <p>
          그 사랑교회는 예수님의 은혜를 받은 사람들로서 다른 사람들에게 은혜를 베푸는 공동체로 성장하기를 소원하며 기도하고 있습니다.
        </p>
      </div>
    </Section>
  )
}


function World() {
  return (
    <Section title="세상" image={{ src: imageWorld }}>
      <div className="space-y-6 text-base text-neutral-600 font-nanum">
        <p>
          성경은 ‘하나님이 세상을 이처럼 사랑하사’(요3:16) 라고 말합니다.        </p>
        <p>
          그 사랑교회는 하나님이 사랑하시는 세상을 사랑하며, 그 세상의 문화를 그리스도의 문화로 변화시키는 일을 사명으로 생각하고 있습니다.        </p>
        <p>
          복음이 가정을, 복음이 직장을, 복음이 우리의 삶이 모든 것을 변화시키는 원동력임을 믿고, 하나님 나라의 완벽한 모델은 아니지만 하나님나라가 저기 있음을 가리키는 화살표로 살아가기를 노력하고 있습니다.         </p>
      </div>

      {/* <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote> */}
    </Section>
  )
}

export default function Process() {
  return (
    <>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
        <World />
      </div>
    </>
  )
}
