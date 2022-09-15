const Signup = () => {
    return (
        <section className="container mx-auto sm:px-4">
            <div className="px-4 py-12 text-white bg-emerald-600 sm:py-16 md:py-20 xl:py-28 sm:rounded-lg">
                <div className="mb-8 space-y-4 text-center lg:mb-12">
                    <h2 className="text-4xl font-semibold md:text-5xl">Start your free trial</h2>
                    <p className="mx-auto text-lg md:max-w-md">Trial period - 14 days, no credit card required</p>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2.5 sm:space-y-0 justify-center">
                    <input className="w-full px-6 py-4 border-2 border-white border-solid rounded-lg outline-none sm:w-72 sm:border-r-0 sm:rounded-none sm:rounded-tl-lg sm:rounded-bl-lg focus:border-emerald-700" type="text" placeholder="Your email address" />
                    <button type="submit" className="px-6 py-4 font-semibold text-white transition-colors duration-300 bg-emerald-700 rounded-lg hover:bg-emerald-800 sm:rounded-none sm:rounded-tr-lg sm:rounded-br-lg">Get Started</button>
                </div>
            </div>
        </section>
    );
}
 
export default Signup;