'use client';
import superbaseClient from '@/lib/superbase/client';
import { InfoOutline } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Drawer, IconButton } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [user, setUser]: any = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await superbaseClient.auth.getUser();
      setUser(user);
    };

    superbaseClient.auth.onAuthStateChange((event) => {
      // console.log(event);
      if (event === 'SIGNED_OUT') {
        setUser(null);
      }
    });

    getUser();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.links}>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Link href={'/'}>Home</Link>
          <Link href={'/create'}>Create</Link>
        </div>

        <Link href={'/profile'}>
          {user ? (
            <Avatar alt='Mohammed' src={user.user_metadata.avatar_url} sx={{ width: 34, height: 34 }} />
          ) : (
            <Avatar alt='' sx={{ width: 34, height: 34 }} />
          )}
        </Link>
      </main>

      {/*  */}
      <Drawer open={open} onClose={toggleDrawer} anchor='bottom'>
        <div className={styles.drawer}>
          <InfoOutline />
          <p>Help</p>
        </div>
      </Drawer>
    </div>
  );
}
