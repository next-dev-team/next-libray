import {
  TestimonialsCard1,
  TestimonialsCard2,
  TestimonialsCard3,
  TestimonialsCard4,
  TestimonialsCard5,
  TestimonialsCard6,
} from '../../';
import { DemoLayout, IDemoLayout } from '../../utils/layout';

export default () => {
  const data: IDemoLayout['data'] = [
    {
      title: 'Testimonials Card1',
      component: <TestimonialsCard1 />,
    },
    {
      title: 'Testimonials Card2 ',
      component: <TestimonialsCard2 />,
    },
    {
      title: 'Testimonials Card2-A ',
      component: <TestimonialsCard2 {...{ type: 'primary' }} />,
    },
    {
      title: 'Testimonials Card3 ',
      component: <TestimonialsCard3 {...{ type: 'primary' }} />,
    },
    {
      title: 'Testimonials Card4',
      component: <TestimonialsCard4 />,
    },
    {
      title: 'Testimonials Card5',
      component: <TestimonialsCard5 />,
    },
    {
      title: 'Testimonials Card6',
      component: <TestimonialsCard6 />,
    },
  ];

  return <DemoLayout data={data} />;
};
