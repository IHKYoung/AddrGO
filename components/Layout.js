import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  const router = useRouter();
  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>地址翻译</span>
          </Link>
          
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={router.pathname === '/' ? styles.active : ''}>
                <Link href="/">首页</Link>
              </li>
              <li className={router.pathname === '/support' ? styles.active : ''}>
                <Link href="/support">支持</Link>
              </li>
              <li className={router.pathname === '/contact' ? styles.active : ''}>
                <Link href="/contact">联系我们</Link>
              </li>
              <li className={router.pathname === '/privacy' ? styles.active : ''}>
                <Link href="/privacy">隐私政策</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className={styles.main}>{children}</main>
      
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <h3>地址翻译</h3>
            <p>一键将中文地址转写成国际标准英文格式</p>
          </div>
          
          <div className={styles.footerColumn}>
            <h3>快速链接</h3>
            <ul>
              <li><Link href="/">首页</Link></li>
              <li><Link href="/support">支持</Link></li>
              <li><Link href="/contact">联系我们</Link></li>
              <li><Link href="/privacy">隐私政策</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerColumn}>
            <h3>联系我们</h3>
            <p>邮箱: hi@ahaknow.com</p>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} AHAKNOW LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
