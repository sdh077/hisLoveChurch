'use client'

import { type Metadata } from 'next'
import YouTube from 'react-youtube';

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { supabase } from '@/lib/api'
import VideoPlayer, { Sermon } from '@/components/VideoPlayer';
import { PostgrestSingleResponse } from '@supabase/supabase-js';


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
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };


    return (
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
            <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
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
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-ridi text-4xl font-bold tracking-tight text-white sm:text-6xl">이번주 설교 말씀</h2>
                <div className="border-y">
                    <div className="-my-px mx-auto max-w-full min-h-full">
                        <YouTube
                            videoId={data![0].link}                  // defaults -> ''
                            // id={string}                       // defaults -> ''
                            className=''                // defaults -> ''
                            // iframeClassName={string}          // defaults -> ''
                            // style={object}                    // defaults -> {}
                            // title={string}                    // defaults -> ''
                            // loading={string}                  // defaults -> undefined
                            opts={opts}                        // defaults -> {}
                        // onReady={func}                    // defaults -> noop
                        // onPlay={func}                     // defaults -> noop
                        // onPause={func}                    // defaults -> noop
                        // onEnd={func}                      // defaults -> noop
                        // onError={func}                    // defaults -> noop
                        // onStateChange={func}              // defaults -> noop
                        // onPlaybackRateChange={func}       // defaults -> noop
                        // onPlaybackQualityChange={func}    // defaults -> noop
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
