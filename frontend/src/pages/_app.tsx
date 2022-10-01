import 'antd/dist/antd.variable.min.css'

import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

const AntConfigProvider = dynamic(
  () => import('@/components/ant-config-provider'),
  { ssr: false }
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AntConfigProvider>
      <Component {...pageProps} />
    </AntConfigProvider>
  )
}

export default MyApp
