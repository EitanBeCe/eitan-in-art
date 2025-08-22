import paintings, {PaintingCodable} from "@/lib/paintings";
import {PaintingCardRowView} from "@/components/PaintingCardRowView";
import React from "react";
// import YoutubeEmbedView from "@/components/YoutubeEmbedView";
// import {CardContainer} from "@/components/ui/3d-card";
import YoutubeEmbedCardInsert from "@/components/YoutubeEmbedRowView";

export default function Home() {
    return (
        <section className="section_container !py-4">
            <ul className="card_grid">
                {paintings.map((p: PaintingCodable, index: number) => (
                    <React.Fragment key={p.slug}>
                        <li>
                            <PaintingCardRowView {...p} />
                        </li>

                        {/* вставка YouTube-карточки после определённого индекса */}
                        <YoutubeEmbedCardInsert
                            currentIndex={index}
                            insertAtIndex={2}
                            videoId="aDhUUyaRN00"
                        />
                    </React.Fragment>
                ))}
            </ul>

            {/*<ul className="card_grid">*/}
            {/*    {paintings?.length > 0 ? (*/}
            {/*        paintings.map((p: PaintingCodable, index: number) => (*/}
            {/*            <React.Fragment key={p.slug}>*/}
            {/*                <PaintingCardRowView {...p} />*/}

            {/*                {index === 2 && (*/}
            {/*                    <li className="list-none">*/}
            {/*                        <CardContainer className="inter-var" containerClassName="py-2 max-sm:pt-0 pb-0 flex items-center justify-center">*/}
            {/*                            <YoutubeEmbedView*/}
            {/*                                videoId="aDhUUyaRN00"*/}
            {/*                                className="w-[calc(100vw-2rem)] sm:w-[30rem] h-full max-md:aspect-[9/16] aspect-[93/100] rounded-xl max-h-[90vh] shadow overflow-hidden"*/}
            {/*                            />*/}
            {/*                        </CardContainer>*/}
            {/*                    </li>*/}
            {/*                )}*/}
            {/*            </React.Fragment>*/}
            {/*        ))*/}
            {/*    ) : (*/}
            {/*        <p className="no-results">No artworks found</p>*/}
            {/*    )}*/}
            {/*</ul>*/}
        </section>

    );
}
