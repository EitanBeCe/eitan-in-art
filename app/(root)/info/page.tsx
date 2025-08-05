import paintings, {PaintingCodable} from "@/lib/paintings";
import {PaintingCardRowView} from "@/components/PaintingCardRowView";
import DeliveryAndPrintsInfoView from "@/components/DeliveryAndPrintsInfoView";

export default function InfoPage() {
    return (
        <>
            <section className="section_container">
                <DeliveryAndPrintsInfoView fullView/>

                <ul className="mt-7 card_grid">
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
        </>
    );
}
