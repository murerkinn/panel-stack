import { Typography } from 'antd'
import Link from 'next/link'

import styles from './logo.module.scss'

const Logo = () => (
  <div className={styles.logo}>
    <Link href="/" passHref>
      <Typography.Title className={styles.logoText}>Stack</Typography.Title>
    </Link>
  </div>
)

export default Logo
