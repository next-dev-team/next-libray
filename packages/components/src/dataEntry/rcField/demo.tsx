import { Button } from 'antd';
import { RcField, RcForm, useForm } from '../';
import { DemoLayout } from '../../utils/layout';

export default () => {
  const [form] = useForm();
  const data = [
    {
      title: 'Input validation',
      component: (
        <RcForm
          className="w-full"
          form={form}
          onFinish={(values) => {
            alert(JSON.stringify(values));
          }}
        >
          <RcField
            label="Username"
            name="username"
            rules={[{ required: true }, { type: 'email' }]}
          />
          <Button onClick={form.submit}>Submit1</Button>
        </RcForm>
      ),
    },
  ];

  return <DemoLayout data={data} />;
};
