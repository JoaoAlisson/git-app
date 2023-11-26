import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
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
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  )
}
