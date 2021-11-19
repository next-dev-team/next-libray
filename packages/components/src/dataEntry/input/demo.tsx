import { Input } from 'components-next';
import { DemoLayout } from '../../utils/layout';

export default () => {
  const data = [
    {
      title: 'Default',
      component: (
         <Input various="default" name="default" label="default input" requiredSign errText="This field is required!"/>
      ),
    },
    {
      title: 'Success',
      component: (
         <Input various="success" name="success" label="success input"/>
      ),
    },
    {
      title: 'Warning',
      component: (
         <Input various="warning" name="warning" label="warning input"/>
      ),
    },
    {
      title: 'Error',
      component: (
         <Input various="error" name="error" label="error input" requiredSign errText="This field is required!"/>
      ),
    },
  ];

  return <DemoLayout data={data} />;
};

