import { EcommerceCard1, EcommerceCard2, EcommerceCard3 } from '..';
import { DemoLayout } from '../../utils/layout';

const Demo = () => {
  const data = [
    { title: 'ecommerce card1', component: <EcommerceCard1 /> },
    { title: 'ecommerce card2', component: <EcommerceCard2 /> },
    { title: 'ecommerce card3', component: <EcommerceCard3 /> },
  ];

  return <DemoLayout  data={data} />;
};

export default Demo;
