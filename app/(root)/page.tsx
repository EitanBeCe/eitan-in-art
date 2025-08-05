import paintings, {PaintingCodable} from "@/lib/paintings";
import {PaintingCardRowView} from "@/components/PaintingCardRowView";

export default function Home() {
    return (
        <section className="section_container !py-0 !pt-4">
            <ul className="card_grid">
                {paintings?.length > 0 ? (
                    paintings.map((p: PaintingCodable) => (
                        <PaintingCardRowView
                            key={p.slug}
                            {...p}
                        />
                    ))
                ) : (
                    <p className="no-results">No artworks found</p>
                )}
            </ul>
        </section>
    );
}
