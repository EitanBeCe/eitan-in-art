'use client'

import React from 'react'

type YoutubeShortEmbedProps = {
    videoId: string
    className?: string
}

const YoutubeShortEmbed: React.FC<YoutubeShortEmbedProps> = ({ videoId, className }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&modestbranding=1&rel=0`

    return (
        <div
            className={className}
            // style={{ position: 'relative', paddingBottom: '177%', height: 0 }}
        >
            <iframe
                src={embedUrl}
                title="YouTube Short"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                    // position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    // border: 'none',
                }}
            />
        </div>
    )
}

export default YoutubeShortEmbed
