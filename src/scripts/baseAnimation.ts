import { animate, inView, stagger, glide } from 'motion';

inView(
  'section',
  (info) => {
    animate(
      info.target.querySelectorAll('.animate'),
      {
        opacity: [0, 1],
        transform: ['translateY(-100px)', 'translateY(0px)'],
      },
      {
        duration: 0.8,
        delay: stagger(0.15),
      }
    );
  },
  { margin: '-25%' }
);
inView(
  'section',
  (info) => {
    animate(
      info.target.querySelectorAll('.reveal'),
      {
        transform: ['translateX(0px)', 'translateX(8000px)'],
      },
      {
        duration: 2,
        easing: glide(),
      }
    );
  },
  { margin: '-25%' }
);
