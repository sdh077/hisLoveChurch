import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import cross1 from '@/images/cross1.jpeg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import Slide from '@/components/Slide'

import image1 from '@/images/swiper/main_image_1.jpeg'
import image2 from '@/images/swiper/main_image_2.jpeg'
import image3 from '@/images/swiper/kosangsub.webp'
import image4 from '@/images/swiper/main2.jpeg'
import image5 from '@/images/swiper/pray1.jpeg'
import image6 from '@/images/swiper/kosangsub2.jpeg'
import image7 from '@/images/swiper/kosangsub3.jpeg'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h1 className="text-center font-nanum font-display text-lg font-semibold tracking-wider text-white sm:text-left">
            예배시간 안내
          </h1>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols gap-x-8 gap-y-10 lg:grid-cols-3"
          >
            <li><p className="text-sm font-nanum text-white">주일 11:00 - 11:30</p> <p className='text-md font-nanum font-bold text-white'>성도 간 교제</p></li>
            <li><p className="text-sm font-nanum text-white">주일 11:30 - 13:30</p> <p className='text-md font-nanum font-bold text-white'>찬양 및 예배</p></li>
            <li><p className="text-sm font-nanum text-white">주일 13:30 -</p> <p className='text-md font-nanum font-bold text-white'>점심 및 소그룹</p></li>
          </ul>
        </FadeInStagger>
        
      </Container>
    </div>
  )
}

function Example() {
  return (
    <div className="bg-white pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <img
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                src="/kosangsub4.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <figure className="relative isolate pt-6 sm:pt-12">
              <svg
                viewBox="0 0 162 128"
                fill="none"
                aria-hidden="true"
                className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
              >
                <path
                  id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                  d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                />
                <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
              </svg>
              <blockquote className="text-lg font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p className='text-sm font-nanum'>
                  성도 한 사람 한 사람의 삶이 하나님 앞에서 가장 아름답게 열매맺는 일을 목적으로 살아가고 있다. 
                </p>
                <p className='text-sm font-nanum'>
                  예수님을 믿었지만, 목회가 무엇인지 잘 모르고 방황하는 시절에 사랑의교회 고 옥한흠 목사를 통해 목회적 회심을 경험했고 한 영혼을 위해 목숨을 거는 제자훈련 목회를 철학으로 삼고 있다. 
                </p>
                <p className='text-sm font-nanum'>
                  또 오늘날 문화에 맞는 복음을 전하기를 꿈꾸며 리디머 교회 팀 켈러 목사를 통해 복음의 가치를 재발견하여 복음과 제자훈련을 접목하여 복음적 훈련 공동체를 추구하고 있다.
                </p>

              </blockquote>
              <figcaption className="mt-8 text-base">
                <div className="font-ridi font-semibold text-white">고상섭</div>
                <div className="font-ridi mt-1 text-gray-400">그사랑교회 담임목사</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}



function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image6, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function Words() {
  return (
    <>
      <SectionIntro
        title="Gospel Changes Everything"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
      </SectionIntro>
      
      <Container className="mt-16">
        <div className="font-ridi text-xl lg:flex lg:items-center lg:justify-end">
            복음은 모든 것을 변화시킨다
        </div>
      </Container>
    </>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p className='font-nanum'>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        title="그사랑교회는 복음으로"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
      </SectionIntro>

      
      <Container className="mt-16">
      
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={cross1}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="예배,전도">
              사람들을 하나님께 연결
            </ListItem>
            <ListItem title="교제, 양육">
              사람들을 서로에게 연결
            </ListItem>
            <ListItem title="문화 : (직업과 신앙의 통합)">
              사람들을 세상과 연결
            </ListItem>
            <ListItem title="도시 : (정의와 자비 사역)">
              사람들을 세상과 연결
            </ListItem>
            <ListItem title="가정사역">
              사람들을 가정과 연결
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  const caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      {/* <Slide /> */}
      <Container className="mt-20">
        <div className="max-w-2xl">
          <h1 className="font-ridi text-4xl break-words font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            그사랑교회에 오신 것을 환영합니다
          </h1>
          <p className="font-nanum mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Gospel Changes Everything     
          </p>
          <p className="font-nanum mt-6 text-base text-zinc-600 dark:text-zinc-400">
            복음을 모든 것을 변화시킵니다     
          </p>
          {/* <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div> */}
        </div>
      </Container>

      <Photos />

      <Clients />

      {/* <Words /> */}

      <Example />
      
      <CaseStudies caseStudies={caseStudies} />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial> */}

      <Services />

      <ContactSection />
    </>
  )
}
