import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
    return ( 
        <>
        <Head>
            <title>Amiso – Free Landing page for your mobile app</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
        </>
     );
}
 
export default Layout;