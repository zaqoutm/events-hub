'use client';
import Link from 'next/link';
import styles from './Navigation.module.css';
import { Avatar, Drawer, IconButton } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { InfoOutline } from '@mui/icons-material';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

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
          <Avatar alt='Mohammed' src='' sx={{ width: 34, height: 34 }} />
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
