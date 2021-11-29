//@ts-nocheck
import { Space } from 'antd';
import { RcField, RcForm, Switch, useForm } from 'components-next';
import { DemoLayout, IDemoLayout } from '../../utils/layout';

const SwitchDemo = () => {
  const [form] = useForm();

  const data: IDemoLayout['data'] = [
    {
      title: 'Switch',
      component: (
        <Space>
          <Switch unCheckedChildren="off" checkedChildren="on" />
          <Switch unCheckedChildren="off" checkedChildren="on" defaultChecked />
        </Space>
      ),
      span: '12',
    },
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
          <RcField initialValue={false} label="Are you Ok?" name="username" various="switch" />
        </RcForm>
      ),
      span: '12',
    },
  ];

  return <DemoLayout data={data} />;
};
export default SwitchDemo;
