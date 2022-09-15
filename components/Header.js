import { Popover } from '@headlessui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { navigation } from '../pages/routes'

const Header = () => {
    // Router
    const router = useRouter()

    const handleGetInTocuh = e => {
        e.stopPropagation()

        router.push('/touch')
    }

    return (
        <Popover className="relative">
            <header className="container flex items-center justify-between px-4 pt-6 mx-auto">
                {/* Logo */}
                <Link href="/" className="">
                    <div className='flex items-center cursor-pointer'>
                        <img src="./logo.png" alt="Logo" />
                        <span className='pl-2'>My Personal Space</span>
                    </div>
                    
                </Link>

                {/* Navigation */}
                <div className="flex items-center">
                    <div className="hidden space-x-6 font-medium md:block">
                        {navigation.map((item, i) => (
                            <a key={i} href={item.href} className="transition-colors duration-200 hover:text-emerald-700">{item.name}</a>
                        ))}
                        <button 
                            className="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 py-2.5 px-5 rounded-lg text-white font-semibold"
                            onClick={handleGetInTocuh}
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>
            </header>
        </Popover>
    );
}
 
export default Header;