import App from 'next/app';
import Outline from './../components/common/outline';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Outline component={<Component {...pageProps} />} />
}

export default MyApp
