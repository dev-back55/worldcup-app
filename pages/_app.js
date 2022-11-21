import { SessionProvider } from "next-auth/react"
import Layout from '../components/Layout';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { darkTheme, lightTheme } from '../theme';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  

  return (
    <SessionProvider session={session}>
    <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
    >  
    <NextUIProvider>
      <Layout>
        
          <Component {...pageProps} />
        
        
      </Layout>
    </NextUIProvider>  
    </NextThemesProvider>
    </SessionProvider>
  );
}

export default MyApp
