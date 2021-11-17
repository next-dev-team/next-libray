//@ts-ignore
import { PriceCard1, PriceCard2 } from 'components-next';
import { DemoLayout, IDemoLayout } from '../../utils/layout';

export default () => {
  const data: IDemoLayout['data'] = [
    {
      title: 'Pricing Card2',
      component: (
        <PriceCard2
          data={{
            title: undefined,
          }}
        />
      ),
    },
    {
      title: 'Pricing Card1',
      component: <PriceCard1 />,
    },
  ];

  return <DemoLayout data={data} />;
};
