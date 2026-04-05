import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';
import { EventsList } from '@/components/ui/EventsList/page';

const description = 'hello';
const title = 'EH';
const url = 'https://test.com';

// metadata
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

// home page, list all events
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Welcome back, to Events Hub!</h1>
        </div>
        <EventsList />
      </main>
    </div>
  );
}
