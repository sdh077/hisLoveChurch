'use client'
import YouTube from 'react-youtube';
export interface Sermon {
    id: number,
    created_at: string,
    title: string,
    link: string,
    paper: string,
    ppt: string,
    play_dt: string
}
const VideoPlayer = ({ data }: { data: Sermon }) => {
    const opts = {
        height: '680',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
    return (
        <div style={{ opacity: 1, transform: "none" }}>
            <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="mx-auto max-w-5xl">
                            <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                                <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                                    <dt className="font-semibold">제목</dt>
                                    <dd>{data.title}</dd>
                                </div>
                                <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                                    <dt className="font-semibold">Year</dt>
                                    <dd>
                                        <time>{data.play_dt?.slice(0, 10)}</time>
                                    </dd>
                                </div>
                                <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                                    <dt className="font-semibold">링크</dt>
                                    <dd><a href={`https://www.youtube.com/watch?v=${data.link}`} target='_blank'>이동</a></dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-y border-neutral-200 bg-neutral-100">
                <div className="-my-px mx-auto max-w-full bg-neutral-200">
                    <YouTube
                        videoId={data.link}                  // defaults -> ''
                        // id={string}                       // defaults -> ''
                        className='w-full h-full'                // defaults -> ''
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

    )
}
export default VideoPlayer;