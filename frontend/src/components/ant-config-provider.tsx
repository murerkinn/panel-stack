import { ConfigProvider } from 'antd'
import { ConfigProviderProps } from 'antd/lib/config-provider'

ConfigProvider.config({
  theme: {
    primaryColor: '#6D5AE6',
    errorColor: '#FC7063',
    warningColor: '#FFC668',
    successColor: '#98EE5D',
  },
})

const AntConfigProvider = ({ children, ...rest }: ConfigProviderProps) => {
  return <ConfigProvider {...rest}>{children}</ConfigProvider>
}

export default AntConfigProvider
