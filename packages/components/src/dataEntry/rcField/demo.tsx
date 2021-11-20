import { Button } from 'antd';
import Form from 'rc-field-form';
import { RcField } from '../';
import { DemoLayout } from '../../utils/layout';
const { useForm } = Form;

export default () => {
  const [form] = useForm();
  const data = [
    {
      title: 'Input validation',
      component: (
        <Form
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
          <Button onClick={form.submit}>Submit</Button>
        </Form>
      ),
    },
  ];

  return <DemoLayout data={data} />;
};
