import Icon from '@ant-design/icons'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import { Menu } from 'antd'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

type MenuItemLabelProps = {
  text: string
  href: string
}

const MenuItemLabel = ({ text, href }: MenuItemLabelProps) => {
  const { t } = useTranslation()

  return (
    <Link href={href} passHref>
      <a>{t(text)}</a>
    </Link>
  )
}

const menuItems: ItemType[] = [
  {
    key: '/',
    label: <MenuItemLabel text="dashboard" href="/" />,
    icon: <Icon component={DashboardRoundedIcon as any} />,
  },
  {
    key: '/profile',
    label: <MenuItemLabel text="profile" href="/profile" />,
    icon: <Icon component={PersonRoundedIcon as any} />,
  },
]

interface AppMenuProps {
  theme?: 'light' | 'dark'
  onSelect?(): void
}

const AppMenu = ({ theme = 'light', onSelect }: AppMenuProps) => {
  const router = useRouter()

  return (
    <Menu
      theme={theme}
      selectedKeys={[router.pathname]}
      items={menuItems}
      onSelect={onSelect}
      mode="inline"
    />
  )
}

export default AppMenu
