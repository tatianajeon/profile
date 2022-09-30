import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import floral from './photos/floral.jpg';
import bythewindow from './photos/sittingbythewindow.jpg';
import beach from './photos/calibeach.jpg';
import bouque from './photos/bouque.jpg';
import bougainvillea from './photos/bougainvillea.jpg';
import surfing from './photos/surfing.jpg';
import kauai from './photos/kauai.jpg';
import mauibeach from './photos/mauibeach.jpg';
import haleakala from './photos/haleakala.jpg';
import olowalu from './photos/olowalu.jpg';
import Nashville from './photos/nashville-skyline.jpg';
import riley from './photos/dog.jpg';

export const Photobook = () => {
  return (
    <Box sx={{ width: '100%', height: 600, overflowY: 'scroll', borderRadius: '25px' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: floral,
    title: 'wedding dinner floral accent',
  },
  {
    img: Nashville,
    title: 'Nashville Skyline',
  },
  {
    img: bouque,
    title: 'flowers',
  },
  {
    img: riley,
    title: 'surfing doggo',
  },
  {
    img: bythewindow,
    title: 'sitting by the window',
  },
  {
    img: bougainvillea,
    title: 'bougainvilleas',
  },
  {
    img: kauai,
    title: 'secret falls',
  },
  {
    img: olowalu,
    title: 'olowalu',
  },
  {
    img: beach,
    title: 'Shaw\'s Cove',
  },
  {
    img: surfing,
    title: 'Storage',
  },
  {
    img: haleakala,
    title: 'Haleakala',
  },
  {
    img: mauibeach,
    title: 'Maui',
  },
];
