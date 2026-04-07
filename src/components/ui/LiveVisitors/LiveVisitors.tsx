'use client';

import superbaseClient from '@/lib/superbase/client';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function LiveVisitors() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleClose = () => {
    console.log('close');

    setOpen(false);
  };

  useEffect(() => {
    // define or create channel
    const channel = superbaseClient.channel('live-visitors', {
      config: {
        presence: {
          key: crypto.randomUUID(),
        },
      },
    });

    // sub to new visits persence
    channel
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState();
        const total = Object.keys(state).length;
        setCount(total);
      })
      .subscribe(async (status) => {
        if (status !== 'SUBSCRIBED') return;

        await channel.track({
          online_at: new Date().toISOString(),
          page: window.location.pathname,
        });
      });

    // listen to all messages
    channel
      .on('broadcast', { event: '*' }, (payload) => {
        setOpen(true);
        setAlertMessage(payload?.payload?.message);
      })
      .subscribe();

    return () => {
      channel.untrack();
      superbaseClient.removeChannel(channel);
    };
  }, []);

  return (
    <div className='flex' style={{ margin: 13 }}>
      {/* <Button onClick={() => setOpen(true)}>click</Button> */}
      <Snackbar open={open} onClose={handleClose} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}>
        <Alert onClose={handleClose} severity='info' variant='filled' sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>

      <Image unoptimized alt='live' src={'/live.gif'} width={50} height={20} />
      {count ? <p style={{ backgroundColor: '#ffe' }}>{count} live visitors.</p> : 'loading...'}
    </div>
  );
}
