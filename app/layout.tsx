import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css';
import Header from '../src/components/Header';

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
        <Header></Header>
        <main className={styles.mainContainer}>
          <section className={styles.mainContent}>{children}</section>
        </main>
      </body>
    </html>
  )
}
