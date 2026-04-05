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
        <Image className={styles.logo} src='/logo-events-hub.png' alt='logo' width={100} height={20} priority />
        <div className={styles.intro}>
          <h1>Hello, events hub!</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae ex, cum molestias fugit reprehenderit atque repellat nobis
            cupiditate, fuga sequi quisquam amet quae optio tempore! Eaque ut fugiat voluptate.
          </p>
        </div>
      </main>
    </div>
  );
}
