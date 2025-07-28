import paintings, {PaintingCodable} from "@/lib/paintings";
import {PaintingCardRowView} from "@/components/PaintingCardRowView";
import DeliveryAndPrintsInfoView from "@/components/DeliveryAndPrintsInfoView";

export default function InfoPage() {
    return (
        <>
            <section className="section_container">
                <div className="max-w-4xl mx-auto px-4 py-8">
                    {/*<h1 className="text-3xl font-bold mb-6">Delivery and Prints Information</h1>*/}

                    <DeliveryAndPrintsInfoView fullView/>
                </div>

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
