'use client';

import superbaseClient from '@/lib/superbase/client';
import { LogoutOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { redirect } from 'next/navigation';

export const LogutButton = () => {
  const doLogout = async () => {
    await superbaseClient.auth.signOut();
    redirect('/');
  };

  return (
    <Button color='error' startIcon={<LogoutOutlined />} variant='contained' onClick={doLogout}>
      Sign out
    </Button>
  );
};
