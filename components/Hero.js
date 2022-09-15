import { useState, useEffect } from 'react'
// Firebase
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

const Hero = () => {
    // Local States
    const [emailValue, setEmailValue] = useState('')
    const [postFulfilled, setPostFulfilled] = useState(false)

    // Display email sent icon for 2 seconds
    useEffect(() => {
        setTimeout(() => {
            if(postFulfilled) {
                setPostFulfilled(false)
            }
        }, 2000)
    }, [postFulfilled])

    const handleChangeEmailValue = e => {
        e.preventDefault()
        e.stopPropagation()

        setEmailValue(e.target.value)
    }

    const handleEmailSave = async e => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'redhots'), {
                email: emailValue
            })
            setPostFulfilled(true)
            setEmailValue('')
        } catch (err) {
            console.log(err)
            setPostFulfilled(false)
        }
    }

    return (
        <section className="container px-4 py-12 mx-auto sm:py-16 md:py-20 xl:py-28">
            <div className="grid items-center gap-10 lg:grid-cols-2">
                <div className="space-y-8 lg:space-y-12">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-semibold sm:text-6xl">
                            Welcome to
                            <span className="block">my personal space</span>
                        </h1>
                        <p className="max-w-sm text-xl">Enter your email address if you'd like to get in touch.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-2.5 sm:space-y-0">
                        <input
                            className="w-full px-6 py-4 border-2 rounded-lg outline-none sm:w-72 sm:border-r-0 sm:rounded-none sm:rounded-tl-lg sm:rounded-bl-lg focus:border-emerald-600"
                            type="text"
                            placeholder="Your email address"
                            value={emailValue}
                            onChange={handleChangeEmailValue}
                        />
                        <button
                            className="px-6 py-4 font-semibold text-white transition-colors duration-300 bg-emerald-600 rounded-lg hover:bg-emerald-700 sm:rounded-none sm:rounded-tr-lg sm:rounded-br-lg"
                            onClick={handleEmailSave}
                        >
                            {
                                postFulfilled ?
                                <img className='w-[24px] h-[24px]' src="./checked.svg" alt="Logo" />
                                :
                                'Save'
                            }
                        </button>
                    </div>
                </div>
                <img src="../img/hero-illustration.png" alt="Illustration" />
            </div>
        </section>
    );
}

export default Hero;