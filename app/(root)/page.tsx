import paintings, {PaintingCodable} from "@/lib/paintings";
import {PaintingCardRowView} from "@/components/PaintingCardRowView";

export default function Home() {
    return (
        <>
            <h1 className="text-2xl">Eitan in Art</h1>

            <div className="flex flex-col space-x-0 border-2"></div>

            <section className="section_container">
                <ul className="mt-7 card_grid">
                    {paintings?.length > 0 ? (
                        paintings.map((p: PaintingCodable) => (
                            <PaintingCardRowView key={p?.slug} />
                        ))
                    ) : (
                        <p className="no-results">No startups found</p>
                    )}
                </ul>
            </section>
        </>
    );
}
