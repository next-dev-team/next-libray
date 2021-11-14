import { TestimonialsCard1, TestimonialsCard2, TestimonialsCard3 } from '.';
import type { IDemoLayout } from '../../utils/layout';
import { DemoLayout } from '../../utils/layout';

export default () => {
  const data: IDemoLayout['data'] = [
    {
      title: 'Testimonials Card1',
      component: <TestimonialsCard1 />,
      span: 'lg',
    },
    {
      title: 'Testimonials Card2 ',
      component: <TestimonialsCard2 />,
      span: 'xs',
    },
    {
      title: 'Testimonials Card2-A ',
      component: <TestimonialsCard2 {...{ type: 'primary' }} />,
      span: 'xs',
    },
    {
      title: 'Testimonials Card3 ',
      component: <TestimonialsCard3 {...{ type: 'primary' }} />,
      span: 'xs',
    },
  ];

  return <DemoLayout data={data} />;
};
