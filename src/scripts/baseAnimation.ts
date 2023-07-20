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
          'translateY(15px)',
          'translateY(0px)',
        ],
      },
      {
        duration: 1,
        delay: stagger(0.2),
      }
    );
  },
  { margin: '-25%' }
);
