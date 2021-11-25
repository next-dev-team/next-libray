import { Steps } from '../';
import { DemoLayout } from '../../utils/layout';

const LayoutDemo = () => {
  const data = [
    {
      title: 'Default',
      component: <Steps />,
    },
  ];

  return <DemoLayout data={data} />;
};

export default LayoutDemo;
