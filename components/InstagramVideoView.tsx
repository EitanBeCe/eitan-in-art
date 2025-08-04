'use client';

import Script from 'next/script'

interface InstagramVideoViewProps {
    videoUrl: string
}

export default function InstagramVideoView({ videoUrl }: InstagramVideoViewProps) {
    return (
        <main className="flex flex-col items-center justify-center pb-4">
            {/* Instagram Embed Block */}
            <blockquote
                className="instagram-media"
                data-instgrm-permalink={videoUrl}
                data-instgrm-version="14"
                // style={{
                //     background: '#FFF',
                //     border: 0,
                //     margin: 0,
                //     padding: 0,
                //     maxWidth: 540,
                //     width: '100%',
                // }}
            ></blockquote>

            {/* Instagram Embed Script */}
            <Script
                async
                src="//www.instagram.com/embed.js"
                onLoad={() => {
                    if ((window as any).instgrm) {
                        (window as any).instgrm.Embeds.process()
                    }
                }}
            />
        </main>

    )
}
