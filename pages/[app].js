import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

// 隐私政策内容数据
const privacyPolicies = {
  addrgo: {
    name: 'AddrGo',
    lastUpdated: '2025-04-26',
    content: [
      {
        title: '引言',
        text: 'AddrGo应用（以下简称"我们"或"本应用"）非常重视用户的隐私保护。本隐私政策旨在向您说明我们如何收集、使用、存储和共享您的个人信息，以及您享有的相关权利。请您在使用我们的服务前，仔细阅读并了解本隐私政策的全部内容。'
      },
      {
        title: '我们收集的信息',
        text: '我们可能收集以下类型的信息：\n1. 您提供的信息：包括但不限于您在注册、使用我们的服务时主动提供的个人信息，如姓名、电子邮件地址、电话号码等。\n2. 设备信息：我们可能自动收集有关您使用的设备的信息，如设备型号、操作系统版本、设备设置、唯一设备标识符等。\n3. 位置信息：在您授权的情况下，我们可能收集您的位置信息，以提供基于位置的服务。\n4. 使用信息：我们可能收集您如何使用我们的应用和服务的信息，如访问时间、访问页面、停留时间等。'
      },
      {
        title: '信息的使用',
        text: '我们使用收集的信息用于以下目的：\n1. 提供、维护和改进我们的服务。\n2. 开发新的服务、功能和特性。\n3. 了解和分析我们服务的使用趋势。\n4. 响应您的请求和提供客户支持。\n5. 发送服务通知和更新。\n6. 防止、检测和调查欺诈、安全漏洞和其他潜在的禁止或非法活动。'
      },
      {
        title: '信息的共享',
        text: '我们不会出售您的个人信息。在以下情况下，我们可能会共享您的信息：\n1. 在获得您的明确同意的情况下。\n2. 与我们的服务提供商和合作伙伴共享，他们帮助我们提供和改进我们的服务。\n3. 为遵守适用法律、法规或法律程序的要求。\n4. 为保护我们、我们的用户或公众的权利、财产或安全。\n5. 在涉及合并、收购、资产出售或类似交易的情况下。'
      },
      {
        title: '数据安全',
        text: '我们采取合理的技术和组织措施来保护您的个人信息不被未经授权的访问、使用或披露。然而，请注意，尽管我们努力保护您的信息，但没有任何安全措施是完全无懈可击的。'
      },
      {
        title: '您的权利',
        text: '根据适用的数据保护法律，您可能享有以下权利：\n1. 访问您的个人信息。\n2. 更正不准确或不完整的个人信息。\n3. 删除您的个人信息。\n4. 限制或反对处理您的个人信息。\n5. 数据可携带性。\n6. 撤回同意（如适用）。'
      },
      {
        title: '儿童隐私',
        text: '我们的服务不面向13岁以下的儿童。我们不会故意收集13岁以下儿童的个人信息。如果您是父母或监护人，并且您认为您的孩子向我们提供了个人信息，请联系我们，我们将采取措施删除这些信息。'
      },
      {
        title: '隐私政策的变更',
        text: '我们可能会不时更新本隐私政策。当我们进行重大变更时，我们将通过在应用中发布通知或发送电子邮件等方式通知您。我们鼓励您定期查看本隐私政策，以了解我们如何保护您的信息。'
      },
      {
        title: '联系我们',
        text: '如果您对本隐私政策有任何疑问或顾虑，请通过以下方式联系我们：\n电子邮件：privacy@ahaknow.com'
      }
    ]
  },
  // 可以添加更多应用的隐私政策
}

export default function PrivacyPolicy() {
  const router = useRouter()
  const { app } = router.query
  
  // 如果页面还在服务器端渲染或路由还未准备好，显示加载状态
  if (!app) {
    return <div className={styles.container}>Loading...</div>
  }
  
  // 获取对应应用的隐私政策
  const policy = privacyPolicies[app]
  
  // 如果找不到对应的隐私政策，显示错误页面
  if (!policy) {
    return (
      <div className={styles.container}>
        <Head>
          <title>隐私政策 - 未找到</title>
          <meta name="description" content="未找到请求的隐私政策" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className={styles.main}>
          <h1 className={styles.title}>未找到隐私政策</h1>
          <p className={styles.description}>抱歉，我们找不到您请求的应用隐私政策。</p>
          <Link href="/" className={styles.backLink}>
            返回首页
          </Link>
        </main>
      </div>
    )
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>{policy.name} - 隐私政策</title>
        <meta name="description" content={`${policy.name}的隐私政策`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>{policy.name} 隐私政策</h1>
        <p className={styles.lastUpdated}>最后更新：{policy.lastUpdated}</p>
        
        <div className={styles.policyContent}>
          {policy.content.map((section, index) => (
            <section key={index} className={styles.section}>
              <h2>{section.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: section.text.replace(/\n/g, '<br/>') }} />
            </section>
          ))}
        </div>
        
        <Link href="/" className={styles.backLink}>
          返回首页
        </Link>
      </main>
      
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} AhaKnow. All rights reserved.</p>
      </footer>
    </div>
  )
}
