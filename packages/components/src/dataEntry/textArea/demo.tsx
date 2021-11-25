//@ts-ignore
import { RcField, RcForm, useForm } from 'components-next';
import { DemoLayout } from '../../utils/layout';

export default () => {
  const [form] = useForm();

  const data = [
    {
      title: 'TextArea with Form',
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
            various="textArea"
            name="username"
            rules={[{ required: true }]}
          />
        </RcForm>
      ),
    },
  ];

  return <DemoLayout data={data} />;
};
