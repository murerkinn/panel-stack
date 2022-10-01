import MenuIcon from '@mui/icons-material/Menu'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Button, Drawer, Layout, Space, Typography } from 'antd'
import useTranslation from 'next-translate/useTranslation'
import { ReactNode, useEffect } from 'react'
import { useState } from 'react'

import styles from './app-layout.module.scss'
import AppMenu from './app-menu'
import Logo from './logo'

type AppLayoutProps = {
  children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { t } = useTranslation()

  const mobile = useMediaQuery('(max-width: 768px)')
  const tablet = useMediaQuery('(min-width: 768px) and (max-width: 1200px)')

  const [drawerVisible, setDrawerVisible] = useState(false)

  useEffect(() => {
    if (!mobile) setDrawerVisible(false)
  }, [mobile])

  return (
    <Layout className={styles.appLayout}>
      {!mobile && (
        <Layout.Sider collapsed={tablet} collapsedWidth={80} width={240}>
          {tablet ? (
            <Typography.Title level={2}>ST</Typography.Title>
          ) : (
            <Logo />
          )}
          <AppMenu theme="dark" onSelect={() => setDrawerVisible(false)} />
        </Layout.Sider>
      )}
      <Layout>
        <Layout.Header className={styles.appLayoutHeader}>
          {mobile && (
            <Space>
              <Button
                type="text"
                icon={<MenuIcon style={{ fontSize: 32 }} />}
                onClick={() => setDrawerVisible(true)}
              />
              <Drawer
                title="Stack"
                placement="left"
                open={drawerVisible}
                onClose={() => setDrawerVisible(false)}
              >
                {
                  <AppMenu
                    theme="light"
                    onSelect={() => setDrawerVisible(false)}
                  />
                }
              </Drawer>
            </Space>
          )}
          <Button className={styles.logoutButton}>{t('logout')}</Button>
        </Layout.Header>
        <Layout.Content>{children}</Layout.Content>
        <Layout.Footer>Stack @ 2022</Layout.Footer>
      </Layout>
    </Layout>
  )
}

export default AppLayout
