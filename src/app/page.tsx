import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';

const description = 'hello';
const title = 'EH';
const url = 'https://test.com';

export const metadata: Metadata = {
  title: title,
  description: description,
  metadataBase: new URL(url),

  openGraph: {
    title: title,
    description: description,
    url: url,
    images: ['/ss-aljazara.png'],
  },
  alternates: {
    canonical: `${url}/about`,
  },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Whats up</h1>
      </main>
    </div>
  );
}
