'use client';
import superbaseClient from '@/lib/superbase/client';
import { CalendarTodayOutlined, ConfirmationNumberOutlined, KeyboardArrowRightOutlined, TimeToLeave } from '@mui/icons-material';
import { Button } from '@mui/material';
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
              <div className={styles.eventCardImageContainer}>
                {event.cover_image && event.cover_image.startsWith('http') ? (
                  <Image className={styles.eventCardImage} loading='eager' alt='cover' src={event.cover_image} width={200} height={200} />
                ) : (
                  <Image className={styles.eventCardNoImage} loading='eager' alt='cover' src={'/image.jpg'} width={200} height={200} />
                )}
              </div>

              <h1>{event.title}</h1>
              <p>{event.description}</p>
              <div className={styles.eventCardFooter}>
                <p>
                  <CalendarTodayOutlined fontSize='small' />
                  {moment(event.date_time).format('LL  / HH:MM')}
                </p>
                <p>
                  <TimeToLeave fontSize='small' />
                  {event.location}
                </p>
                <p>
                  <ConfirmationNumberOutlined fontSize='small' />
                  {event.price ? <span>{event.price} $</span> : 'Free'}
                </p>

                <div className='flex' style={{ justifyContent: 'flex-end' }}>
                  <Button color='primary' variant='contained' endIcon={<KeyboardArrowRightOutlined />}>
                    Buy tickets
                  </Button>
                </div>
              </div>
            </div>
          ))
        : '...loading'}
    </div>
  );
};
