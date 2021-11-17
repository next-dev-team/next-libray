//@ts-ignore
import { EcommerceCard1, EcommerceCard2, EcommerceCard3, EcommerceCard4 } from 'components-next';
import { DemoLayout } from '../../utils/layout';

const Demo = () => {
  const data = [
    { title: 'ecommerce card4', component: <EcommerceCard4 /> },
    { title: 'ecommerce card3', component: <EcommerceCard3 /> },
    { title: 'ecommerce card2', component: <EcommerceCard2 /> },
    { title: 'ecommerce card1', component: <EcommerceCard1 /> },

  ];

  return <DemoLayout data={data} />;
};

export default Demo;
