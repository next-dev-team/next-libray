import { Pricing2 } from './price2';
import { DemoLayout } from '../utils/layout';

const Demo = () => {
  return <DemoLayout data={[{ title: 'Price2', component: <Pricing2 /> }]} />;
};

export default Demo;
