import { Input } from '../';
import { DemoLayout } from '../../utils/layout';

export default () => {
  const data = [
    {
      title: 'Default',
      component: (
        <Input
          theme="default"
          name="default"
          label="default input"
          requiredSign
          errText="This field is required!"
        />
      ),
    },
    {
      title: 'Success',
      component: <Input theme="success" name="success" label="success input" />,
    },
    {
      title: 'Warning',
      component: <Input theme="warning" name="warning" label="warning input" />,
    },
    {
      title: 'Error',
      component: (
        <Input
          theme="error"
          name="error"
          label="error input"
          requiredSign
          errText="This field is required!"
        />
      ),
    },
  ];

  return <DemoLayout data={data} />;
};
