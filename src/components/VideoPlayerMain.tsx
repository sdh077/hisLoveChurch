'use client'

import YouTube from 'react-youtube';

export default function VideoPlayerMain({ link }: { link: string }) {
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <YouTube
            videoId={link}
            className='aspect-video'
            opts={opts}
        />
    )
}
