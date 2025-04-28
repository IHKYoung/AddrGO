import Head from 'next/head';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>联系我们 - 地址翻译</title>
        <meta name="description" content="与地址翻译团队取得联系，我们期待您的反馈和建议" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.contactContainer}>
        <div className={styles.contactHeader}>
          <h1 className={styles.contactTitle}>联系我们</h1>
          <p className={styles.contactSubtitle}>我们期待您的反馈和建议</p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>联系方式</h2>
            
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>✉️</div>
                <div className={styles.infoDetails}>
                  <h3>电子邮件</h3>
                  <p>hi@ahaknow.com</p>
                  <p className={styles.infoDescription}>用于一般咨询和合作</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📲</div>
                <div className={styles.infoDetails}>
                  <h3>技术支持</h3>
                  <p>support@ahaknow.com</p>
                  <p className={styles.infoDescription}>用于报告问题或获取技术帮助</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📈</div>
                <div className={styles.infoDetails}>
                  <h3>商务合作</h3>
                  <p>business@ahaknow.com</p>
                  <p className={styles.infoDescription}>用于商务合作和企业咨询</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <h2 className={styles.sectionTitle}>发送消息</h2>
            <p className={styles.formDescription}>
              填写下面的表单，我们将尽快与您联系。
            </p>
            
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">姓名</label>
                <input type="text" id="name" name="name" placeholder="您的姓名" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">电子邮件</label>
                <input type="email" id="email" name="email" placeholder="您的电子邮件" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject">主题</label>
                <input type="text" id="subject" name="subject" placeholder="消息主题" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">消息内容</label>
                <textarea id="message" name="message" rows="5" placeholder="请输入您的消息" required></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>发送消息</button>
            </form>
          </div>
        </div>
        
        <div className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>常见问题</h2>
          <p className={styles.faqDescription}>
            在联系我们之前，您可能想了解以下常见问题的答案。
          </p>
          
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>响应时间是多久？</h3>
              <p>我们通常会在24小时内回复您的邮件或表单提交。对于紧急问题，我们会尽力更快地回复。</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>我可以提出新功能建议吗？</h3>
              <p>当然可以！我们非常重视用户的反馈和建议。您可以通过上面的表单或发送邮件至 hi@ahaknow.com 提供您的建议。</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>我可以与您的团队进行商务合作吗？</h3>
              <p>我们欢迎各类商务合作机会。请发送邮件至 business@ahaknow.com，详细说明您的合作意向，我们的商务团队将与您联系。</p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>如何报告应用中的问题？</h3>
              <p>如果您在使用我们的应用时遇到任何问题，请发送邮件至 support@ahaknow.com，并提供问题的详细描述、您的设备信息以及可能的错误截图。</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
