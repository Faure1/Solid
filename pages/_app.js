import '../styles/globals.scss'
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from "../theme/darkTheme";
import { whiteTheme } from "../theme/whitetheme"
import { useRouter } from 'next/router'
import "swiper/css/bundle";


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return(
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp