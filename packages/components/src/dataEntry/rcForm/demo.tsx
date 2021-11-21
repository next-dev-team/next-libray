import { useForm } from 'rc-field-form';
import { RcForm } from '.';
import { RcField } from '../';
import { DemoLayout } from '../../utils/layout';

export default () => {
  const [form] = useForm();

  const data = [
    {
      title: 'RcForm',
      component: (
        <RcForm
          form={form}
          onFinish={(values) => {
            alert(JSON.stringify(values));
          }}
        >
          <RcField name="name" rules={[{ required: true }]} />
          <RcField
            various="select"
            name="test"
            rules={[{ required: true }]}
            options={[{ value: 1 }]}
          />
          <button onClick={() => form.resetFields()}>Reset</button>
          <button onClick={form.submit}>Submit</button>
        </RcForm>
      ),
    },
  ];

  return <DemoLayout data={data} />;
};
