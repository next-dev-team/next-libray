import { PricingCard1, PricingCard2 } from 'components-next/src';
import { DemoLayout, IDemoLayout } from '../../utils/layout';

export default () => {
  const data: IDemoLayout['data'] = [
    {
      title: 'Pricing Card2',
      component: (
        <PricingCard2
          data={{
            title: undefined,
          }}
        />
      ),
    },
    {
      title: 'Pricing Card1',
      component: <PricingCard1 />,
    },
  ];

  return <DemoLayout data={data} />;
};
