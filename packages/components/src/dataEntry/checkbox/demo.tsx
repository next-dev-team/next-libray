//@ts-ignore
import { RcField, RcForm, useForm } from 'components-next';
import { DemoLayout, IDemoLayout } from '../../utils/layout';

const SwitchDemo = () => {
  const [form] = useForm();

  const data: IDemoLayout['data'] = [
    {
      title: 'Switch checked',
      component: (
        <RcForm
          className="w-full"
          form={form}
          onFinish={(values) => {
            alert(JSON.stringify(values));
          }}
        >
          <RcField label="Are you Ok?" name="username" rules={[{ required: true }]}>
            <input type="password" />
          </RcField>
        </RcForm>
      ),
      span: '12',
    },
  ];

  return <DemoLayout data={data} />;
};
export default SwitchDemo;
