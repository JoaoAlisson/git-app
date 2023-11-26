import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import styles from './styles.module.css';
import HeaderComponent from '../src/components/HeaderComponent';

export const metadata = {
  title: 'Github API APP',
  description: 'Github API APP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <HeaderComponent></HeaderComponent>
        <main className={styles.mainContainer}>
          <section className={styles.mainContent}>{children}</section>
        </main>
      </body>
    </html>
  )
}
