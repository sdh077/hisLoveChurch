'use client'

import YouTube from 'react-youtube';

import { supabase } from '@/lib/api'


// const getData = async (id: string): Promise<PostgrestSingleResponse<Sermon[]>> => {
//     return await supabase.from('archive').select().eq('id', id)
// }

const getData = async () => {
    const end = 0
    const youtube_list = await supabase.from('archive').select().range(0, end).order('id', { ascending: false })
    // console.log()
    return youtube_list
}


export default async function MiddleHeader() {
    const { data, error } = await getData()
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    console.log(data![0].link)


    return (
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">

            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-8xl text-center">
                <h2 className="font-ridi text-4xl font-bold tracking-tight text-white sm:text-6xl mb-5">이번주 설교 말씀</h2>
            </div>
            <div className="aspect-video max-w-6xl mx-auto">
                <YouTube
                    videoId={data![0].link}
                    className='aspect-video'
                    opts={opts}
                />
            </div>
        </div>
    )
}
