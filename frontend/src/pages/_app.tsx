import '@/styles/index.scss'

import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

import AppLayout from '@/components/app-layout'

const AntConfigProvider = dynamic(
  () => import('@/components/ant-config-provider'),
  { ssr: false }
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AntConfigProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AntConfigProvider>
  )
}

export default MyApp
