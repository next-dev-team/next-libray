import { RcField } from 'components-next';
import { DemoLayout } from '../../utils/layout';
import Form from 'rc-field-form';
import { Button } from 'antd';
const { useForm } = Form;

export default () => {
  const [form] = useForm();
  const data = [
    {
      title: 'Default',
      component: (
        <Form
          className="w-full"
          form={form}
          onFinish={(values) => {
            console.log('Finish:', values);
          }}
        >
          <RcField label="Username" name="username" rules={[{ required: true }]} />
          <Button onClick={form.submit}>Submit</Button>
        </Form>
      ),
    },
  ];

  return <DemoLayout data={data} />;
};
