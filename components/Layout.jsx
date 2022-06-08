import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import NavBar from './NavBar';
import Footer from './Footer';


const Layout = ({children}) => (
    <>
        <Head>
            <title>Real State</title>
        </Head>
        <Box w={'100%'} maxWidth='1280px' mx='auto'>
            <header>
                <NavBar/>
            </header>
            <main>
                {children}
            </main>
            
        </Box>
        <footer>
                <Footer/>
        </footer>
    </>
);


export default Layout;