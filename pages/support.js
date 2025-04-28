import Head from 'next/head';
import styles from '../styles/Support.module.css';

export default function Support() {
  return (
    <>
      <Head>
        <title>支持 - 地址翻译</title>
        <meta name="description" content="地址翻译应用的常见问题和支持信息" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.supportContainer}>
        <div className={styles.supportHeader}>
          <h1 className={styles.supportTitle}>支持中心</h1>
          <p className={styles.supportSubtitle}>我们随时为您提供帮助</p>
        </div>

        <div className={styles.supportContent}>
          <section className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>常见问题</h2>
            
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>地址翻译应用是如何工作的？</h3>
                <p className={styles.faqAnswer}>
                  地址翻译应用使用智能算法解析中文地址，识别其中的省市区、街道、小区、楼栋、单元等信息，然后按照国际标准格式重新组织这些信息，生成规范的英文地址。所有处理都在本地设备上完成，不会上传您的地址信息。
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>应用支持哪些语言？</h3>
                <p className={styles.faqAnswer}>
                  目前应用主要支持将中文地址转换为英文格式。此外，我们还支持将转换后的地址翻译成日语、韩语、法语等多种语言，以满足不同国家和地区的需求。
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>如何确保转换的准确性？</h3>
                <p className={styles.faqAnswer}>
                  我们的算法经过大量真实地址数据的训练和优化，能够准确识别中国地址的各种格式和特点。对于特殊或复杂的地址，应用会尽可能提取关键信息并合理组织。如果您发现任何转换不准确的情况，欢迎向我们反馈，帮助我们不断改进。
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>应用是否收集我的地址信息？</h3>
                <p className={styles.faqAnswer}>
                  不会。我们高度重视用户隐私，所有地址处理都在您的设备本地完成，不会将您输入的地址上传到任何服务器或存储在云端。您可以放心使用我们的应用，无需担心隐私泄露问题。
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>如何提供反馈或报告问题？</h3>
                <p className={styles.faqAnswer}>
                  如果您在使用过程中遇到任何问题，或有改进建议，请通过应用内的反馈功能或发送邮件至 support@ahaknow.com 联系我们。我们的团队会认真对待每一条反馈，并尽快回复您。
                </p>
              </div>
            </div>
          </section>
          
          <section className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>联系我们</h2>
            <p className={styles.contactDescription}>
              如果您有任何问题、建议或合作意向，请随时与我们联系。我们的团队将尽快回复您。
            </p>
            
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <h3>电子邮件</h3>
                <p>support@ahaknow.com</p>
              </div>
              
              <div className={styles.contactMethod}>
                <h3>响应时间</h3>
                <p>我们通常会在24小时内回复您的邮件</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
