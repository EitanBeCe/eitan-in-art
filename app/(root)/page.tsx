export default function Home() {
    return (
        <>
            <h1 className="text-2xl">Eitan in Art</h1>

            <section className="section_container">
                <ul className="mt-7 card_grid">
                    {paintings?.length > 0 ? (
                        paintings.map((p: PaintingCodable) => (
                            <PaintingCard key={p?._id} post={p}/>
                        ))
                    ) : (
                        <p className="no-results">No startups found</p>
                    )}
                </ul>
            </section>
        </>
    );
}
