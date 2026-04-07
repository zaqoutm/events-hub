import { createClient } from '@/lib/superbase/server';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import styles from './page.module.css';

const description = 'Create a new event';
const title = 'Create';
const url = 'https://test.com';

export const metadata: Metadata = {
  title: title,
  description: description,
  metadataBase: new URL(url),

  openGraph: {
    title: title,
    description: description,
    url: url,
    images: ['...'],
  },
  alternates: {
    canonical: `${url}/create`,
  },
};

export default async function ProfilePage() {
  const c = await createClient();
  const {
    data: { user },
  } = await c.auth.getUser();

  if (!user) redirect('/login');

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Create event!</h1>
      </main>
    </div>
  );
}
