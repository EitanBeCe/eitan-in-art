// import React from 'react'
import { CardContainer } from '@/components/ui/3d-card'
import YoutubeEmbedView from '@/components/YoutubeEmbedView'

type YoutubeEmbedRowViewProps = {
    currentIndex: number
    insertAtIndex: number
    videoId: string
}

export default function YoutubeEmbedRowView({
   currentIndex,
   insertAtIndex,
   videoId,
}: YoutubeEmbedRowViewProps) {
    if (currentIndex !== insertAtIndex) return null

    return (
        <li className="list-none">
            <CardContainer
                className="inter-var"
                containerClassName="py-2 max-sm:pt-0 pb-0 flex items-center justify-center"
            >
                <YoutubeEmbedView
                    videoId={videoId}
                    className="w-[calc(100vw-2rem)] sm:w-[30rem] h-full max-md:aspect-[9/16] aspect-[93/100] rounded-xl max-h-[90vh] shadow overflow-hidden hover:shadow-purple-500 dark:hover:shadow-purple-500/80 hover:shadow-[0_0_45px_0px]"
                />
            </CardContainer>
        </li>
    )
}
