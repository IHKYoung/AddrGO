import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Privacy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AddrGO - 隐私政策</title>
        <meta name="description" content="AddrGO地址翻译神器的隐私政策" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>AddrGO 隐私政策</h1>
        <p className={styles.lastUpdated}>最后更新：2025-04-26</p>
        
        <div className={styles.policyContent}>
          <section className={styles.section}>
            <h2>引言</h2>
            <p>AddrGO应用（以下简称"我们"或"本应用"）高度重视用户的隐私保护。本隐私政策旨在向您说明我们的应用如何处理您的信息，特别是我们<strong>不收集任何用户个人信息</strong>的承诺。</p>
          </section>
          
          <section className={styles.section}>
            <h2>不收集用户信息的承诺</h2>
            <p>AddrGO承诺：</p>
            <ul>
              <li>不收集任何用户个人信息</li>
              <li>所有地址转换操作均在本地设备上完成，不会将输入的地址数据上传到任何服务器</li>
              <li>不要求用户注册账号或提供个人信息</li>
              <li>不包含任何跟踪用户行为的分析工具</li>
              <li>不会访问设备上的其他数据</li>
              <li>不会在后台运行或收集任何使用统计信息</li>
            </ul>
          </section>
          
          <section className={styles.section}>
            <h2>技术实现</h2>
            <p>为了确保您的隐私安全，我们的应用：</p>
            <ul>
              <li>所有地址解析算法和转换逻辑均在本地执行</li>
              <li>不会将用户输入的地址数据存储在任何数据库中</li>
              <li>不会将用户的使用行为或输入内容用于任何商业目的</li>
            </ul>
          </section>
          
          <section className={styles.section}>
            <h2>应用权限说明</h2>
            <p>AddrGO应用：</p>
            <ul>
              <li>仅需要最基本的权限即可运行</li>
              <li>不会请求访问位置信息、通讯录或其他个人数据</li>
              <li>不会请求访问相机或麦克风</li>
              <li>只在用户主动选择导出转换结果时才会请求存储权限</li>
            </ul>
          </section>
          
          <section className={styles.section}>
            <h2>数据安全</h2>
            <p>虽然我们不收集用户数据，但应用仍然重视安全性：</p>
            <ul>
              <li>应用代码经过安全审查，确保没有恶意代码</li>
              <li>定期更新应用以修复可能的安全漏洞</li>
              <li>不使用任何可能泄露用户信息的第三方库</li>
            </ul>
          </section>
          
          <section className={styles.section}>
            <h2>政策变更</h2>
            <p>我们承诺：</p>
            <ul>
              <li>永远不会开始收集用户个人信息</li>
              <li>如有任何政策变更，都会明确告知用户</li>
              <li>尊重用户的隐私选择权</li>
            </ul>
          </section>
          
          <section className={styles.section}>
            <h2>联系我们</h2>
            <p>如果您对本隐私政策有任何疑问或建议，请通过以下方式联系我们：</p>
            <p>电子邮件：hi@ahaknow.com</p>
          </section>
        </div>
        
        <Link href="/" className={styles.backLink}>
          返回首页
        </Link>
      </main>
      
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} AHAKNOW LLC. All rights reserved.</p>
      </footer>
    </div>
  )
}