import { LogutButton } from '@/components/ui/Logout/Logout';
import { createClient } from '@/lib/superbase/server';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import styles from './page.module.css';

const description = 'My account';
const title = 'Profile';
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
    canonical: `${url}/profile`,
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
        <h1>My profile</h1>
        <div className={styles.profile}>
          <p>{user?.user_metadata.name}</p>
          <p>{user?.email}</p>
        </div>
        <div className={styles.logout}>
          <LogutButton />
        </div>
      </main>
    </div>
  );
}
