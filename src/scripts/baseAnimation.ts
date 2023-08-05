import { animate, inView, stagger } from 'motion';

inView(
  'section',
  (info) => {
    animate(
      info.target.querySelectorAll('.animate'),
      {
        opacity: [0, 1],
        transform: [
          'translateY(-100px)',
          'translateY(0px)',
        ],
      },
      {
        duration: 0.8,
        delay: stagger(0.15),
      }
    );
  },
  { margin: '-25%' }
);
