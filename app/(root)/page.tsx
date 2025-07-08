import paintings, {PaintingCodable} from "@/lib/paintings";
import {PaintingCardRowView} from "@/components/PaintingCardRowView";

export default function Home() {
    return (
        <>
            <section className="section_container">
                <ul className="mt-7 card_grid">
                    {paintings?.length > 0 ? (
                        paintings.map((p: PaintingCodable) => (
                            <PaintingCardRowView
                                key={p.slug}
                                {...p}
                            />
                        ))
                    ) : (
                        <p className="no-results">No startups found</p>
                    )}
                </ul>
            </section>
        </>
    );
}
