import SocialsView from "@/components/SocialsView";

interface DeliveryAndPrintsInfoViewProps {
    fullView?: boolean;
}

const DeliveryAndPrintsInfoView = ({ fullView = false }: DeliveryAndPrintsInfoViewProps) => {
    return (
        <div className={`${fullView ? 'w-full max-w-4xl mx-auto max-sm:-mt-4' : 'lg:w-80 shrink-0'}`}>
            <div
                className={`bg-black-100/10 dark:bg-white/10 px-3 py-6 sm:p-6 rounded-lg backdrop-blur-sm 
                ${fullView ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'sticky top-4'}`
            }>

                <h2 className={`text-xl font-bold mb-4 ${fullView ? 'col-span-full text-center text-4xl' : ''}`}>
                    Prices & Shipping
                </h2>

                {/* Print Prices */}
                <div className="space-y-3 mb-6">
                    <h3 className="font-semibold">Print Prices:</h3>
                    <div className="space-y-2">
                        <p>Small (20x30cm) - ₪200</p>
                        <p>Medium (30x40cm) - ₪350</p>
                        <p>Large (50x70cm) - ₪600</p>
                    </div>
                </div>

                {/* Shipping */}
                <div className="space-y-3 mb-6">
                    <h3 className="font-semibold">Shipping:</h3>
                    <div className="space-y-2">
                        <p>Israel: 2-7 business days</p>
                        <p>Worldwide: 7-14 business days</p>
                    </div>
                </div>

                {/* Production Time */}
                <div className="space-y-3 mb-6">
                    <h3 className="font-semibold">Production Time:</h3>
                    <div className="space-y-2">
                        <p>Print creation: 2-5 business days</p>
                        <p>Your custom painting creation: 1-20 business days</p>
                    </div>
                </div>

                {/* Contacts */}
                <div className={`-my-3 space-y-3 sm:mt-6 p-6 bg-gradient-to-r from-purple-500/60 to-pink-500/60 rounded-xl 
                    border-2 border-purple-500/50 backdrop-blur-sm shadow-lg
                    ${fullView ? 'col-span-full max-w-2xl mx-auto mt-0' : 'sm:mb-1'}`}>
                    <h3 className="text-xl font-bold text-center bg-clip-text text-transparent text-white">
                        Ready to Order?
                    </h3>

                    <div className="space-y-4">
                        <p className="text-center font-medium">
                            To order a print or an original artwork, please contact me:
                        </p>

                        <div className="flex justify-center">
                            <SocialsView />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryAndPrintsInfoView