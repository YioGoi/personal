import { navigation } from '../pages/routes'

const Footer = () => {
    return (
        <footer className="container px-4 py-6 mx-auto mt-6">
            <hr className="mb-6" />
            <div className="flex flex-col justify-between mb-6 space-y-6 md:flex-row md:space-y-0">
                <div className="flex-1">
                    <a href="" className="">
                        <img src="./logo.png" alt="Logo" />
                    </a>
                </div>
                <div className="flex flex-1 space-x-6 font-medium md:justify-center">
                    {navigation.map((item, i) => (
                        <a key={i} href={item.href} className="transition-colors duration-200 hover:text-emerald-700">{item.name}</a>
                    ))}
                </div>
                <div className="flex flex-1 space-x-4 md:justify-end">
                    <a href="https://www.facebook.com/yigit.dogan" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 duration-200 ease-in-out transform hover:scale-125" viewBox="0 0 24 24" fill="currenColor"><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path></svg>
                    </a>
                    <a href="https://twitter.com/hadibeaga" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 duration-200 ease-in-out transform hover:scale-125" viewBox="0 0 24 24" fill="currenColor"><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg>
                    </a>
                </div>
            </div>
            <div className="flex flex-col space-y-2 text-xs text-gray-500 md:flex-row md:justify-center md:space-y-0 md:space-x-3">
                <p>Copyright © 2022 Core. All rights reserved.</p>
                <p>Hand illustration by <a className="text-emerald-700 underline" href="https://icons8.com" rel="nofollow" target="_blank">icons8.com</a></p>
                <p>Photos by <a className="text-emerald-700 underline" href="https://pexels.com" rel="nofollow" target="_blank">pexels.com</a></p>
            </div>
        </footer>
    );
}
 
export default Footer;