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
        <meta name="google-site-verification" content="JsF6x7jLj_uoOLKLvTvvQoYDvaFRqkVLSU6PKLQMBxU" />
        <link rel="icon" href="/img/soccer2.ico" />
     </Head>
     
    <Header />

    {children}

    <footer className={styles.footer}>
      <div>
        <a
          href="https://horacio-abitu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desarrollado por{' '}
          <span className={styles.logo}>
            <Image src="/img/developer.png" color="#ffffff" alt="Horacio Abitú" width={35} height={35} />
          </span>
          Horacio Abitú  - Copyright © 2022
        </a>
        </div>
        <br/>
        <div>
          <span style={{color: "#9750DD", fontSize:"0.775rem"}}>
            Música por: @eu-genius 🎧 - Qatar (World Cup Release)
          </span>
        </div>
      </footer>
  </Box>
  )
}

export default Layout