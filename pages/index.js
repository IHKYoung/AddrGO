import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AddrGO - 地址翻译神器</title>
        <meta name="description" content="AddrGO地址翻译神器 - 一键将中文地址转写成国际标准英文格式" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          AddrGO 地址翻译神器
        </h1>

        <p className={styles.description}>
          每次出境，总被中文地址难住？<br />
          签证申请、快递寄送、海外下单……<br />
          小区、栋号、单元、门牌一个都不能错，顺序还常常搞反？
        </p>

        <div className={styles.highlight}>
          <p><strong>【地址翻译神器】</strong>专为中文地址设计，一键转写成国际标准英文格式，无需手动调整、无需猜测顺序。</p>
        </div>

        <section className={styles.section}>
          <h2>📌 你可能遇到这些场景：</h2>
          <ul className={styles.featureList}>
            <li>填写签证申请和留学资料，怕地址顺序错被拒签？</li>
            <li>注册境外银行/证券账户，需要精确英文地址？</li>
            <li>在Amazon、iHerb、Shein 等海外电商买买买，收货地址不标准怕丢件？</li>
            <li>国际快递/文件邮寄，地址不规范寄不到？</li>
            <li>出境游酒店/接送机填写太麻烦？</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>【核心功能】</h2>
          <ul className={styles.featureList}>
            <li>🧠 智能解析中文地址，准确提取小区、栋号、单元、门牌等元素</li>
            <li>🌍 自动转写为标准英文地址，顺序合规，全球通用</li>
            <li>🈚 支持中转多语言（日语、韩语、法语等）</li>
            <li>🌀 支持两种格式：国际标准 + 简洁速填版</li>
            <li>📋 一键复制，秒填任何表单</li>
          </ul>
        </section>

        <div className={styles.conclusion}>
          <p>让地址填写，不再焦头烂额！</p>
        </div>

        <div className={styles.cta}>
          <Link href="/privacy" className={styles.privacyLink}>
            隐私政策
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} AHAKNOW LLC. All rights reserved.</p>
      </footer>
    </div>
  )
}
