import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>地址翻译 - 一键将中文地址转为国际标准英文格式</title>
        <meta name="description" content="地址翻译应用专为中文地址设计，一键转写成国际标准英文格式，无需手动调整、无需猜测顺序。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>地址翻译</h1>
          <p className={styles.heroSubtitle}>
            一键将中文地址转为国际标准英文格式，无需手动调整、无需猜测顺序
          </p>
          <div className={styles.heroCta}>
            <a href="#features" className="btn btn-primary">了解功能</a>
            <a href="#use-cases" className="btn btn-outline">应用场景</a>
          </div>
          <img 
            src="/app-screenshot.png" 
            alt="地址翻译应用界面" 
            className={styles.heroImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
            }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.featuresSection}>
        <div className={styles.featuresContent}>
          <h2 className={styles.sectionTitle}>核心功能</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🧠</div>
              <h3 className={styles.featureTitle}>智能解析</h3>
              <p className={styles.featureDescription}>
                准确提取中文地址中的小区、栋号、单元、门牌等元素，确保转换的准确性
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✨</div>
              <h3 className={styles.featureTitle}>标准格式</h3>
              <p className={styles.featureDescription}>
                自动转写为国际标准英文地址格式，顺序合规，全球通用，不再担心格式问题
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌍</div>
              <h3 className={styles.featureTitle}>多语言支持</h3>
              <p className={styles.featureDescription}>
                支持中转多种语言，包括日语、韩语、法语等，满足不同国家和地区的需求
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌀</div>
              <h3 className={styles.featureTitle}>多种格式</h3>
              <p className={styles.featureDescription}>
                支持两种格式：国际标准格式和简洁速填版，根据不同场景灵活选择
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📋</div>
              <h3 className={styles.featureTitle}>一键复制</h3>
              <p className={styles.featureDescription}>
                翻译结果支持一键复制，秒填各类表单，节省时间，提高效率
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔒</div>
              <h3 className={styles.featureTitle}>隐私保护</h3>
              <p className={styles.featureDescription}>
                所有地址转换在本地进行，不会收集或上传您的个人信息，完全尊重您的隐私
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className={styles.useCasesSection}>
        <div className={styles.useCasesContent}>
          <h2 className={styles.sectionTitle}>应用场景</h2>
          <ul className={styles.useCasesList}>
            <li className={styles.useCaseItem}>
              <h3 className={styles.useCaseTitle}>签证申请</h3>
              <p className={styles.useCaseDescription}>
                填写签证申请和留学资料时，准确的英文地址格式可以提高签证通过率，避免因地址格式错误导致的拒签风险
              </p>
            </li>
            
            <li className={styles.useCaseItem}>
              <h3 className={styles.useCaseTitle}>境外银行账户</h3>
              <p className={styles.useCaseDescription}>
                注册境外银行或证券账户时，需要提供精确的英文地址，确保账户开通顺利和后续通信无误
              </p>
            </li>
            
            <li className={styles.useCaseItem}>
              <h3 className={styles.useCaseTitle}>海外电商购物</h3>
              <p className={styles.useCaseDescription}>
                在Amazon、iHerb、Shein等海外电商平台购物时，标准的英文收货地址可以避免包裹丢失或送达错误
              </p>
            </li>
            
            <li className={styles.useCaseItem}>
              <h3 className={styles.useCaseTitle}>国际快递</h3>
              <p className={styles.useCaseDescription}>
                发送国际快递或文件时，规范的英文地址格式可以提高送达成功率，减少退件风险
              </p>
            </li>
            
            <li className={styles.useCaseItem}>
              <h3 className={styles.useCaseTitle}>出境旅行</h3>
              <p className={styles.useCaseDescription}>
                预订国外酒店或填写接送机信息时，准确的地址格式可以避免交通和住宿问题
              </p>
            </li>
            
            <li className={styles.useCaseItem}>
              <h3 className={styles.useCaseTitle}>官方文件</h3>
              <p className={styles.useCaseDescription}>
                填写各类官方文件、合同或法律文书时，标准的英文地址可以提高文件的专业性和准确性
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>让地址填写不再焦头烂额</h2>
          <p className={styles.ctaDescription}>
            一键转换，秒出标准英文地址，让您的国际交流更加便捷高效
          </p>
          <a href="#" className={styles.ctaButton}>
            立即体验
          </a>
        </div>
      </section>
    </>
  )
}
