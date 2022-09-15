import { FireIcon, CursorClickIcon, HeartIcon, LightningBoltIcon } from '@heroicons/react/solid'

const features = [
    {
        icon: FireIcon,
        title: 'Incredible',
        description: 'Adipisci tempora pariatur modi recusandae. Omnis neque dolorum. Natus facere voluptatem.',
    },
    {
        icon: CursorClickIcon,
        title: 'Generic',
        description: 'Adipisci tempora pariatur modi recusandae. Omnis neque dolorum. Natus facere voluptatem.',
    },
    {
        icon: HeartIcon,
        title: 'Awesome',
        description: 'Adipisci tempora pariatur modi recusandae. Omnis neque dolorum. Natus facere voluptatem.',
    },
    {
        icon: LightningBoltIcon,
        title: 'Refined',
        description: 'Adipisci tempora pariatur modi recusandae. Omnis neque dolorum. Natus facere voluptatem.',
    },
]

const FeaturesBlocks = () => {
    return (
        <section className="bg-gray-100">
            <div className="container px-4 py-12 mx-auto sm:py-16 md:py-20 xl:py-28">
                
                <div className="mb-10 space-y-4 text-center lg:mb-16">
                    <h2 className="text-4xl font-semibold md:text-5xl">Our service features</h2>
                    <p className="mx-auto text-lg md:max-w-md">Aliquid officiis cumque sunt sint. Et quo culpa. Enim sed natus molestiae fugiat cum consequatur quia sunt.</p>
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 lg:gap-10">
                    {features.map((feature, i) => (
                        <div key={i} className="p-6 space-y-6 transition-shadow duration-200 bg-white rounded-lg shadow hover:shadow-xl">
                            <div className="flex items-center justify-center w-12 h-12 text-white bg-emerald-600 rounded-full">
                                <feature.icon className="w-5 h-5"/>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-2xl font-semibold md:text-3xl">{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
 
export default FeaturesBlocks;