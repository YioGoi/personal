const testimonials = [
    {
        photo: '../img/testimonials-ava-1.jpg',
        name: 'Aron Lowe',
        company: 'Schneider Inc',
        text: 'Itaque est odio et rerum harum molestias aliquam. Ullam et aut velit culpa aut. Perferendis nesciunt non voluptatibus mollitia omnis. Dolorem error inventore. Cupiditate nihil modi quos rerum. Mollitia rerum ipsam facere velit.',

    },
    {
        photo: '../img/testimonials-ava-2.jpg',
        name: 'Murphy Ryan',
        company: 'Gibson Inc',
        text: 'Quis voluptatem nobis quibusdam. Fuga aliquid eum repudiandae aut iure omnis. Omnis facere nisi minus ut quos excepturi saepe perspiciatis et. Dolore ut nihil minima natus enim consequuntur aut qui. Ullam dicta labore dolores eos.',

    },
    {
        photo: '../img/testimonials-ava-3.jpg',
        name: 'Lukas Walker',
        company: 'Kiehn LLC',
        text: 'Et quibusdam voluptatem molestias cum autem autem et ut. Ad et tenetur. Autem quis id tempora accusantium quod dolores et. Possimus voluptatem hic nulla consequatur voluptates libero quia expedita. Eum aut voluptatem qui praesentium vitae.',

    },
]

const Testimonials = () => {
    return (
        <section className="container px-4 py-12 mx-auto sm:py-16 md:py-20 xl:py-28">
            
            <div className="mb-10 space-y-4 text-center lg:mb-16">
                <h2 className="text-4xl font-semibold md:text-5xl">Testimonials</h2>
                <p className="mx-auto text-lg md:max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repellendus numquam.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-10">
                {testimonials.map((testimonial, i) =>(
                    <div key={i} className="p-8 transition-colors duration-200 border-2 border-gray-200 rounded-lg hover:border-emerald-600">
                        <div className="flex items-center mb-6 space-x-4">
                            <img className="w-16 h-16 rounded-full" src={testimonial.photo} alt={testimonial.name} />
                            <div>
                                <h5 className="font-semibold">{testimonial.name}</h5>
                                <p className="text-sm text-gray-600">{testimonial.company}</p>
                            </div>
                        </div>
                        <p>
                            {testimonial.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
 
export default Testimonials;