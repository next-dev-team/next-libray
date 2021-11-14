import { PricingCard1 } from 'components-next';
import { DemoLayout, IDemoLayout } from '../../utils/layout';
import { PricingCard2 } from './pricing2';

export default () => {
  const data: IDemoLayout['data'] = [
    {
      title: 'Pricing Card2',
      component: <PricingCard2 />,
    },
    {
      title: 'Pricing Card1',
      component: <PricingCard1 />,
    },
  ];

  return <DemoLayout data={data} />;
};
