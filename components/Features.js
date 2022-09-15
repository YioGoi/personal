import { ArrowNarrowRightIcon } from '@heroicons/react/outline'

const features = [
    {
        title: 'Incredible',
        description: 'Consequatur quidem deserunt qui fugit cumque ut esse est dignissimos. Itaque quia et veritatis. Qui voluptatem dolor quia exercitationem sed similique. Incidunt quae suscipit nihil deleniti. Possimus praesentium sunt aut tempora ut alias.',
        imgUrl: '../img/block-pic-1.svg',
        linkText: 'Get Started',
        linkIcon: ArrowNarrowRightIcon,
        href: '#0',
    },
    {
        title: 'Fantastic',
        description: 'Itaque cupiditate soluta necessitatibus. Quis ut veritatis sed exercitationem autem est. Pariatur dolorum officiis fuga officia labore libero. Magni tenetur delectus. Et consequatur accusantium quisquam reiciendis aut.',
        imgUrl: '../img/block-pic-2.svg',
        linkText: 'Get Started',
        linkIcon: ArrowNarrowRightIcon,
        href: '#0',
    },
    {
        title: 'Intelligent',
        description: 'Neque aperiam labore reiciendis fugit error mollitia. Repellat non voluptatem expedita quos quia. Quae architecto quia perferendis dicta facilis. Impedit aut sit. Voluptatem praesentium rem officiis.',
        imgUrl: '../img/block-pic-3.svg',
        linkText: 'Get Started',
        linkIcon: ArrowNarrowRightIcon,
        href: '#0',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Features = () => {
    return (
        <section className="container px-4 py-12 mx-auto space-y-12 sm:py-16 md:py-20 xl:py-28 sm:space-y-16 xl:space-y-24">
            {features.map((feature, i) => (
                <div key={i} className={classNames(i % 2 === 0 ? 'lg:flex-row':'lg:flex-row-reverse', 'flex flex-col items-center justify-between space-y-6 lg:space-y-0 lg:space-x-10')}>
                    <div className="w-full lg:w-1/2">
                        <img className="w-full" src={feature.imgUrl} alt="" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-5 sm:space-y-6">
                            <h3 className="text-3xl font-semibold md:text-4xl">{feature.title}</h3>
                            <p className="w-full text-lg sm:w-4/5">
                                {feature.description}
                            </p>
                            <a href={feature.href} className="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 py-2.5 px-5 rounded-lg text-white font-semibold inline-flex space-x-2.5">
                                <span>{feature.linkText}</span>
                                <span>
                                    <feature.linkIcon className="w-6 h-6"/>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
 
export default Features;