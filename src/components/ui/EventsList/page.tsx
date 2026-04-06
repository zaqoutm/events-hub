'use client';
import superbaseClient from '@/lib/superbase/client';
import { Flag } from '@mui/icons-material';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import moment from 'moment';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './style.module.css';

type Event = {
  id: number;
  title: string;
  description: string;
  date_time: string;
  price: string;
  location: string;
  cover_image: string;
};

export const EventsList = () => {
  const [events, setEvents]: any[] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await superbaseClient.from('events').select();
      if (error) {
        console.log(error);
      }
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className={styles.eventsListContainer}>
      {events
        ? events.map((event: Event) => (
            <div className={styles.eventCard} key={event.id}>
              {event.cover_image ? (
                <Image alt='cover' src={event.cover_image} width={100} height={100} />
              ) : (
                <Image alt='cover' src={'/logo-events-hub.png'} width={100} height={100} />
              )}

              <h1>{event.title}</h1>
              <p>{event.description}</p>
              <div className={styles.eventCardFooter}>
                <p>
                  <AccessTimeTwoToneIcon fontSize='small' />
                  {moment(event.date_time).format('LL  HH:MM')}
                </p>
                <p>
                  <Flag fontSize='small' />
                  {event.location}
                </p>
              </div>
              {event.price ? <p>{event.price} $</p> : 'Free'}
            </div>
          ))
        : '...loading'}
    </div>
  );
};
