'use client';
import superbaseClient from '@/lib/superbase/client';
import { Google } from '@mui/icons-material';
import { Button } from '@mui/material';
import styles from './page.module.css';

export default function LoginAuthPage() {
  const doLogin = async () => {
    const { data, error } = await superbaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        // skipBrowserRedirect: true,
        // redirectTo: 'http://localhost:3000/auth/callback',
      },
    });
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Login, create account!</h1>

        <Button startIcon={<Google />} variant='contained' onClick={doLogin}>
          Sign with Google
        </Button>
      </main>
    </div>
  );
}
