import { Box } from "./Box.js";
import Head from 'next/head';
import Image from 'next/image'
import Header from './Header'
import styles from '../styles/Home.module.scss'

const Layout = ({children}) => {
  return (
    <Box
    css={{
      maxW: "100%"
    }}
    >
    <Head>
        <title>World Cup App</title>
        <meta name="description" content="World Cup Qatar 2022 app Fixture Mundial de Futbol 2022 Qatar" />
        <link rel="icon" href="/img/soccer2.ico" />
     </Head>

     <Header />

    {children}
    
    <footer className={styles.footer}>
        <a
          href="https://horacio-abitu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desarrollado por{' '}
          <span className={styles.logo}>
            <Image src="/img/developer.png" color="#ffffff" alt="Horacio Abitú" width={35} height={35} />
          </span>
          Horacio Abitú  -  2022
        </a>
      </footer>
  </Box>
  )
}

export default Layout