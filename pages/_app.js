import { SessionProvider } from "next-auth/react"
import Layout from '../components/Layout';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../theme';

// const darkTheme = createTheme({
//   type: 'dark',
//   className: 'dark-modern',
//   theme: {
//     colors: {
//       primary: '#7928CA',
//       primaryLight: '#582A87',
//       success: '#FF1CF7'
//     }
//   }
// })

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <SessionProvider session={session}>
    <NextUIProvider theme={ darkTheme }>
      <Layout>
        
          <Component {...pageProps} />
        
        
      </Layout>
    </NextUIProvider>  
    </SessionProvider>
  );
}

export default MyApp
